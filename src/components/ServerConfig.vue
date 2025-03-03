<template>
    <div>
        <Transition name="modal">
            <div class="modal-overlay" v-if="show">
                <div class="about-client-box info-box shadow-box config-box">
                    <img src="../assets/images/serverbg.png" alt="BG" class="bg-img">
                    <div class="config-form d-flex align-items-start gap-24 justify-content-center">
                        <div class="form-group">
                            <h3 class="text-white mb-4">网站配置</h3>
                            <div class="config-section">
                                <h4 class="text-white mb-3">服务器设置(只能看不能改,请在源码中修改)</h4>
                                <input type="text" v-model="serverUrl" placeholder="服务器地址" class="form-control">
                            </div>
                            <div class="config-section">
                                <h4 class="text-white mb-3">个人信息设置</h4>
                                <input type="text" v-model="userName" placeholder="用户名" class="form-control">
                                <input type="text" v-model="userEmail" placeholder="邮箱" class="form-control">
                                <input type="text" v-model="userSignatures" placeholder="个性签名" class="form-control">
                                <input type="text" v-model="footSignatures" placeholder="页脚签名" class="form-control">
                                <input type="text" v-model="userTags" placeholder="技能标签" class="form-control">
                                <input type="text" v-model="userGithub" placeholder="Github" class="form-control">
                                <input type="text" v-model="userBlog" placeholder="博客" class="form-control">
                                <input type="text" v-model="userSocial" placeholder="社交" class="form-control">
                            </div>
                            <div class="config-section">
                                <h4 class="text-white mb-3">音乐信息设置</h4>
                                <input type="text" v-model="userMusicUrl" placeholder="音乐地址" class="form-control">
                                <input type="text" v-model="userMusicName" placeholder="音乐名称" class="form-control">
                                <input type="text" v-model="userMusicAuthor" placeholder="音乐作者" class="form-control">
                                <input type="text" v-model="userMusicCover" placeholder="音乐封面" class="form-control">
                            </div>
                            <div class="config-section">
                                <h4 class="text-white mb-3">网站信息设置</h4>
                                <input type="text" v-model="webUrl" placeholder="网站地址" class="form-control">
                                <input type="text" v-model="webName" placeholder="网站名称" class="form-control">
                                <input type="text" v-model="webBeian" placeholder="备案号" class="form-control">
                            </div>
                            <div class="buttons-container">
                                <button @click="handleLogout" class="btn btn-danger logout-btn">
                                    退出登录
                                </button>
                                <div class="buttons">
                                    <button @click="saveConfig" class="btn btn-primary">保存</button>
                                    <button @click="$emit('close')" class="btn btn-secondary">取消</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
        <!-- 添加成功提示弹窗 -->
        <TheToast :show="showToast" @update:show="showToast = $event" :message="toastMessage"
            :loadingText="loadingText" />

    </div>
</template>

<script lang="ts">
import { defineComponent, ref, defineAsyncComponent } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';

// 异步加载TheToast组件
const TheToast = defineAsyncComponent(() => import('./TheToast.vue'));

export default defineComponent({
    name: 'ServerConfig',
    components: {
        TheToast
    },
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    emits: ['close'],

    setup(props, { emit }) {
        const store = useGlobalStore();

        // 创建所有配置项的响应式引用
        const serverUrl = ref(store.serverUrl);  // 添加 serverUrl
        const userName = ref(store.userName);
        const userEmail = ref(store.userEmail);
        const userSignatures = ref(store.userSignatures);
        const footSignatures = ref(store.footSignatures);
        const webUrl = ref(store.webUrl);
        const webName = ref(store.webName);
        const webBeian = ref(store.webBeian);
        const userTags = ref(store.userTags);
        const userGithub = ref(store.userGithub);
        const userBlog = ref(store.userBlog);
        const userSocial = ref(store.userSocial);
        const userMusicUrl = ref(store.userMusicUrl);
        const userMusicName = ref(store.userMusicName);
        const userMusicAuthor = ref(store.userMusicAuthor);
        const userMusicCover = ref(store.userMusicCover);

        const showToast = ref(false);  // 初始值改为 false
        const toastMessage = ref('');  // 添加消息文本
        const loadingText = ref('');    // 添加加载文本

        const saveConfig = async () => {
            loadingText.value = '正在保存...';
            showToast.value = true;

            try {
                // 更新服务器地址
                // store.serverUrl = serverUrl.value;

                await store.updateSettings({
                    userName: userName.value,
                    userEmail: userEmail.value,
                    userSignatures: userSignatures.value,
                    footSignatures: footSignatures.value,
                    webUrl: webUrl.value,
                    webName: webName.value,
                    webBeian: webBeian.value,
                    userTags: userTags.value,
                    userGithub: userGithub.value,
                    userBlog: userBlog.value,
                    userSocial: userSocial.value,
                    userMusicUrl: userMusicUrl.value,
                    userMusicName: userMusicName.value,
                    userMusicAuthor: userMusicAuthor.value,
                    userMusicCover: userMusicCover.value
                });

                toastMessage.value = '设置保存成功';
                setTimeout(() => {
                    showToast.value = false;
                    // emit('close');
                }, 1000);
            } catch (error) {
                toastMessage.value = '保存失败';
                setTimeout(() => {
                    showToast.value = false;
                }, 1000);
            }
        };

        const handleLogout = async () => {
            // 先设置加载状态
            loadingText.value = '正在退出...';
            showToast.value = true;

            try {
                // 执行退出操作
                await store.logout();

                // 更新成功消息
                toastMessage.value = '已退出登录';

                // 设置延时关闭
                setTimeout(() => {
                    emit('close');
                    // 最后再关闭提示
                    setTimeout(() => {
                        showToast.value = false;
                    }, 1000);
                }, 2000);
            } catch (error) {
                // 处理错误情况
                toastMessage.value = '退出失败';
                setTimeout(() => {
                    showToast.value = false;
                }, 3000);
            }
        };
        return {
            serverUrl,  // 添加到返回值中
            userName,
            userEmail,
            userSignatures,
            footSignatures,
            webUrl,
            webName,
            webBeian,
            userTags,
            userGithub,
            userBlog,
            userSocial,
            userMusicUrl,
            userMusicName,
            userMusicAuthor,
            userMusicCover,
            saveConfig,
            handleLogout,
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

.config-box {
    min-width: 500px;
    max-width: 600px;
    max-height: 90vh;
    padding: 30px;
    overflow-y: auto;
    scrollbar-width: none;
    /* Firefox */
    -ms-overflow-style: none;
    /* IE and Edge */
}

.config-box::-webkit-scrollbar {
    display: none;
    /* Chrome, Safari, Opera */
}

.form-group {
    width: 100%;
    padding: 20px;
}

.config-section {
    margin-bottom: 20px;
    padding: 15px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
}

.form-control {
    width: 100%;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
}

.form-control:last-child {
    margin-bottom: 0;
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

.mb-3 {
    margin-bottom: 1rem;
}

.mb-4 {
    margin-bottom: 1.5rem;
}

.mt-4 {
    margin-top: 1.5rem;
}

.buttons-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
}

.btn-danger {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #ffffff;
}

.btn-danger:hover {
    background: rgba(255, 255, 255, 0.2);
}

.logout-btn {
    display: flex;
    align-items: center;
    gap: 8px;
}

.logout-btn i {
    font-size: 16px;
}

.toast-message {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 15px 25px;
    border-radius: 25px;
    z-index: 1100;
    animation: fadeInOut 2s ease-in-out;
}

.toast-content {
    display: flex;
    align-items: center;
    gap: 10px;
}

.toast-content i {
    color: #4CAF50;
    font-size: 20px;
}

@keyframes fadeInOut {
    0% {
        opacity: 0;
        transform: translate(-50%, -20px);
    }

    15% {
        opacity: 1;
        transform: translate(-50%, 0);
    }

    85% {
        opacity: 1;
        transform: translate(-50%, 0);
    }

    100% {
        opacity: 0;
        transform: translate(-50%, -20px);
    }
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