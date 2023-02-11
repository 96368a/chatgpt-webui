export default function Chat() {
    return (<div id="__next">
        <div class="overflow-hidden w-full h-full relative">
            <div class="flex h-full flex-1 flex-col md:pl-[260px]">
                <main
                    class="relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1">
                    <div class="flex-1 overflow-hidden">
                        <div class="react-scroll-to-bottom--css-odewf-79elbk h-full dark:bg-gray-800">
                            <div class="react-scroll-to-bottom--css-odewf-1n7m0yu">
                                <div class="flex flex-col items-center text-sm dark:bg-gray-800">
                                    <div
                                        class="text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100">
                                        <h1
                                            class="text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center">
                                            ChatGPT</h1>
                                        <div class="md:flex items-start text-center gap-3.5">
                                            <div class="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
                                                <h2
                                                    class="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                                                    <svg stroke="currentColor" fill="none" stroke-width="1.5"
                                                        viewBox="0 0 24 24" stroke-linecap="round"
                                                        stroke-linejoin="round" class="h-6 w-6" height="1em" width="1em"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="12" cy="12" r="5"></circle>
                                                        <line x1="12" y1="1" x2="12" y2="3"></line>
                                                        <line x1="12" y1="21" x2="12" y2="23"></line>
                                                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                                        <line x1="1" y1="12" x2="3" y2="12"></line>
                                                        <line x1="21" y1="12" x2="23" y2="12"></line>
                                                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                                    </svg>Examples</h2>
                                                <ul class="flex flex-col gap-3.5 w-full sm:max-w-md m-auto"><button
                                                    class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900">"Explain
                                                    quantum computing in simple terms" →</button><button
                                                        class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900">"Got
                                                        any creative ideas for a 10 year old’s birthday?"
                                                        →</button><button
                                                            class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900">"How
                                                        do I make an HTTP request in Javascript?" →</button></ul>
                                            </div>
                                            <div class="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
                                                <h2
                                                    class="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        aria-hidden="true" class="h-6 w-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z">
                                                        </path>
                                                    </svg>Capabilities</h2>
                                                <ul class="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
                                                    <li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
                                                        Remembers what user said earlier in the conversation</li>
                                                    <li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">Allows
                                                        user to provide follow-up corrections</li>
                                                    <li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">Trained
                                                        to decline inappropriate requests</li>
                                                </ul>
                                            </div>
                                            <div class="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
                                                <h2
                                                    class="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                                                    <svg stroke="currentColor" fill="none" stroke-width="1.5"
                                                        viewBox="0 0 24 24" stroke-linecap="round"
                                                        stroke-linejoin="round" class="h-6 w-6" height="1em" width="1em"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z">
                                                        </path>
                                                        <line x1="12" y1="9" x2="12" y2="13"></line>
                                                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                                    </svg>Limitations</h2>
                                                <ul class="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
                                                    <li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">May
                                                        occasionally generate incorrect information</li>
                                                    <li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">May
                                                        occasionally produce harmful instructions or biased content</li>
                                                    <li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">Limited
                                                        knowledge of world and events after 2021</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full h-32 md:h-48 flex-shrink-0"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient">
                        <form
                            class="stretch mx-2 flex flex-row gap-3 pt-2 last:mb-2 md:last:mb-6 lg:mx-auto lg:max-w-3xl lg:pt-6">
                            <div class="relative flex h-full flex-1 md:flex-col">
                                <div class="flex ml-1 mt-1.5 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center">
                                </div>
                                <div
                                    class="flex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
                                    <textarea tabindex="0" data-id="root"
                                        style="max-height: 200px; height: 24px; overflow-y: hidden;" rows="1"
                                        placeholder=""
                                        class="m-0 w-full resize-none border-0 bg-transparent p-0 pl-2 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pl-0"></textarea><button
                                            class="absolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent"><svg
                                                stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                                stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-1"
                                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="22" y1="2" x2="11" y2="13"></line>
                                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                        </svg></button></div>
                            </div>
                        </form>
                        <div
                            class="px-3 pt-2 pb-3 text-center text-xs text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6">
                            <a href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes" target="_blank"
                                rel="noreferrer" class="underline">ChatGPT Jan 30 Version</a>. Free Research Preview.
                            Our goal is to make AI systems more natural and safe to interact with. Your feedback will
                            help us improve.</div>
                    </div>
                </main>
            </div>
            <div class="dark hidden bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col">
                <div class="flex h-full min-h-0 flex-col ">
                    <div class="scrollbar-trigger flex h-full w-full flex-1 items-start border-white/20">
                        <nav class="flex h-full flex-1 flex-col space-y-1 p-2"><a
                            class="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-2 flex-shrink-0 border border-white/20"><svg
                                stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em"
                                width="1em" xmlns="http://www.w3.org/2000/svg">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>New chat</a>
                            <div class="flex-col flex-1 overflow-y-auto border-b border-white/20 -mr-2">
                                <div class="flex flex-col gap-2 text-gray-100 text-sm"><a
                                    class="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 group"><svg
                                        stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                        stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em"
                                        width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z">
                                        </path>
                                    </svg>
                                    <div class="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
                                        Volatility Usage Review<div
                                            class="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-900 group-hover:from-[#2A2B32]">
                                        </div>
                                    </div>
                                </a><a
                                    class="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 group"><svg
                                        stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                        stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em"
                                        width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z">
                                            </path>
                                        </svg>
                                        <div class="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
                                            UnCSS &amp; DaisyUI Study<div
                                                class="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-900 group-hover:from-[#2A2B32]">
                                            </div>
                                        </div>
                                    </a><a
                                        class="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 group"><svg
                                            stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                            stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em"
                                            width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z">
                                            </path>
                                        </svg>
                                        <div class="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">New
                                            chat<div
                                                class="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-900 group-hover:from-[#2A2B32]">
                                            </div>
                                        </div>
                                    </a><a
                                        class="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 group"><svg
                                            stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                            stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em"
                                            width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z">
                                            </path>
                                        </svg>
                                        <div class="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">New
                                            chat<div
                                                class="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-900 group-hover:from-[#2A2B32]">
                                            </div>
                                        </div>
                                    </a><a
                                        class="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 group"><svg
                                            stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                            stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em"
                                            width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z">
                                            </path>
                                        </svg>
                                        <div class="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">AES
                                            ECB Pkcs7解密<div
                                                class="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-900 group-hover:from-[#2A2B32]">
                                            </div>
                                        </div>
                                    </a><a
                                        class="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 group"><svg
                                            stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                            stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em"
                                            width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z">
                                            </path>
                                        </svg>
                                        <div class="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
                                            刷LeetCode算法题
                                            <div
                                                class="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-900 group-hover:from-[#2A2B32]">
                                            </div>
                                        </div>
                                    </a><a
                                        class="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 group"><svg
                                            stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                            stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em"
                                            width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z">
                                            </path>
                                        </svg>
                                        <div class="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
                                            Golang AES加解密坑<div
                                                class="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-900 group-hover:from-[#2A2B32]">
                                            </div>
                                        </div>
                                    </a><a
                                        class="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 group"><svg
                                            stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                            stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em"
                                            width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z">
                                            </path>
                                        </svg>
                                        <div class="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
                                            网络安全学习心得<div
                                                class="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-900 group-hover:from-[#2A2B32]">
                                            </div>
                                        </div>
                                    </a><a
                                        class="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 group"><svg
                                            stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                            stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em"
                                            width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z">
                                            </path>
                                        </svg>
                                        <div class="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
                                            软件实习日志<div
                                                class="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-900 group-hover:from-[#2A2B32]">
                                            </div>
                                        </div>
                                    </a><a
                                        class="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 group"><svg
                                            stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                            stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em"
                                            width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z">
                                            </path>
                                        </svg>
                                        <div class="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
                                            音乐平台项目背景<div
                                                class="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-900 group-hover:from-[#2A2B32]">
                                            </div>
                                        </div>
                                    </a><a
                                        class="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 group"><svg
                                            stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                            stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em"
                                            width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z">
                                            </path>
                                        </svg>
                                        <div class="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
                                            高校科研管理系统<div
                                                class="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-900 group-hover:from-[#2A2B32]">
                                            </div>
                                        </div>
                                    </a><a
                                        class="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all hover:pr-4 group"><svg
                                            stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                            stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em"
                                            width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z">
                                            </path>
                                        </svg>
                                        <div class="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
                                            大学社团管理系统<div
                                                class="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-900 group-hover:from-[#2A2B32]">
                                            </div>
                                        </div>
                                    </a></div>
                            </div><a
                                class="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"><svg
                                    stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                    stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em"
                                    width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <polyline points="3 6 5 6 21 6"></polyline>
                                    <path
                                        d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                    </path>
                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                </svg>Clear conversations</a><a
                                    class="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"><span
                                        class="flex w-full flex-row justify-between"><span
                                            class="gold-new-button flex items-center gap-3"><svg stroke="currentColor"
                                                fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                                                stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em"
                                                xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>Upgrade to Plus</span><span
                                            class="rounded-md bg-yellow-200 py-0.5 px-1.5 text-xs font-medium uppercase text-gray-800">NEW</span></span></a><a
                                                class="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"><svg
                                                    stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                                    stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em"
                                                    width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>Dark mode</a><a href="https://discord.gg/openai" target="_blank"
                                    class="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"><svg
                                        stroke="currentColor" fill="currentColor" stroke-width="2" viewBox="0 0 640 512"
                                        class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z">
                                    </path>
                                </svg>OpenAI Discord</a><a href="https://help.openai.com/en/collections/3742473-chatgpt"
                                    target="_blank"
                                    class="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"><svg
                                        stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                        stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em"
                                        width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>Updates &amp; FAQ</a><a
                                    class="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"><svg
                                        stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                        stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em"
                                        width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                    <polyline points="16 17 21 12 16 7"></polyline>
                                    <line x1="21" y1="12" x2="9" y2="12"></line>
                                </svg>Log out</a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute top-0 left-0 right-0 z-[2]"></div>
    </div>)
}