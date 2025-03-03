<template>
    <div>
        <Transition name="modal">
            <div class="modal-overlay" v-if="show">
                <div class="about-client-box info-box shadow-box login-box">
                    <img src="../assets/images/serverbg.png" alt="BG" class="bg-img">
                    <div class="login-form d-flex align-items-start gap-24 justify-content-center">
                        <div class="form-group">
                            <h3 class="text-white mb-4">登录</h3>
                            <input type="text" v-model="username" placeholder="用户名" class="form-control">
                            <input type="password" v-model="password" placeholder="密码" class="form-control mt-3">
                            <div class="buttons mt-4">
                                <button @click="handleLogin" class="btn btn-primary">登录</button>
                                <button @click="$emit('close')" class="btn btn-secondary">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
        <TheToast v-model:show="showToast" :message="toastMessage" :loadingText="loadingText" />

    </div>
</template>

<script lang="ts">
import { defineComponent, ref, defineAsyncComponent } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';

// 异步加载TheToast组件
const TheToast = defineAsyncComponent(() => import('./TheToast.vue'));

export default defineComponent({
    name: 'LoginModal',
    components: {
        TheToast
    },
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    emits: ['login-success', 'close'],
    setup(props, { emit }) {
        const store = useGlobalStore();
        const username = ref('');
        const password = ref('');
        const showToast = ref(false);
        const toastMessage = ref('');  // 添加消息文本
        const loadingText = ref('');    // 添加加载文本

        const handleLogin = async () => {
            // 验证输入
            if (!username.value || !password.value) {
                loadingText.value = '验证输入...';
                toastMessage.value = '请输入用户名和密码';
                showToast.value = true;
                setTimeout(() => {
                    showToast.value = false;
                }, 2000);
                return;
            }

            try {
                // 显示加载状态
                loadingText.value = '正在登录...';
                showToast.value = true;

                // 登录成功后更新UI
                toastMessage.value = '登录成功';
                showToast.value = true;
                // 执行登录操作
                await store.login(username.value, password.value);
                // 延迟清空输入并关闭弹窗
                await new Promise(resolve => setTimeout(resolve, 1000));

                // 清空输入
                username.value = '';
                password.value = '';

                // 触发成功事件
                emit('login-success');
                emit('close');

                // 最后关闭提示
                await new Promise(resolve => setTimeout(resolve, 1000));
                showToast.value = false;
            } catch (error) {
                // 显示错误消息
                toastMessage.value = error instanceof Error ? error.message : '用户名或密码错误';
                showToast.value = true;
                await new Promise(resolve => setTimeout(resolve, 2000));
                showToast.value = false;
            }
        };

        return {
            username,
            password,
            handleLogin,
            showToast,
            toastMessage,
            loadingText
        };
    }
});
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.login-box {
    min-width: 400px;
    padding: 30px;
}

.form-group {
    width: 100%;
    padding: 20px;
}

.form-control {
    width: 100%;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 15px;
}

.buttons {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
}

.btn {
    padding: 8px 20px;
    border-radius: 5px;
    cursor: pointer;
}

.btn-primary {
    background: #ffffff;
    border: none;
    color: rgb(0, 0, 0);
}

.btn-secondary {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
}

.text-white {
    color: white;
}

.mb-4 {
    margin-bottom: 1.5rem;
}

.mt-3 {
    margin-top: 1rem;
}

.mt-4 {
    margin-top: 1.5rem;
}

/* 添加过渡动画 */
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .about-client-box,
.modal-leave-to .about-client-box {
    transform: translateY(-20px);
}

.modal-enter-active .about-client-box,
.modal-leave-active .about-client-box {
    transition: transform 0.3s ease;
}
</style>