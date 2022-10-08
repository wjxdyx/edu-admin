import { createHtmlPlugin } from 'vite-plugin-html'

const copyright_common_style = 'font-size: 14px; margin-bottom: 2px; padding: 6px 8px; color: #fff;'
const copyright_main_style = `${copyright_common_style} background: #e24329;`
const copyright_sub_style = `${copyright_common_style} background: #707070;`

export default function createHtml(env, isBuild) {
    const { VITE_APP_TITLE, VITE_APP_DEBUG_TOOL, VITE_APP_MODE } = env
    const html = createHtmlPlugin({
        inject: {
            data: {
                title: VITE_APP_TITLE,
                debugTool: VITE_APP_DEBUG_TOOL,
                appMode: VITE_APP_MODE,
                copyrightScript: `
<script>
if ((navigator.language || navigator.browserLanguage).toLowerCase() === 'zh-cn') {
    console.info('%c由%c瑞源泽%c提供技术支持', '${copyright_sub_style}', '${copyright_main_style}', '${copyright_sub_style}', '\\nhttps://gitee.com/hooray/瑞源泽');
} else {
    console.info('%cPowered by%c瑞源泽', '${copyright_sub_style}', '${copyright_main_style}', '\\nhttps://github.com/hooray/瑞源泽');
}
</script>
                `
            }
        },
        minify: isBuild
    })
    return html
}
