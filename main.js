const AREAHTML = document.querySelector('#areahtml')
const AREACSS = document.querySelector('#areacss')
const AREAJS = document.querySelector('#areajs')

AREAHTML.addEventListener('keyup', renderIframe)
AREACSS.addEventListener('keyup', renderIframe)
AREAJS.addEventListener('keyup', renderIframe)

function renderIframe() {
    let html = getValueHTML()
    let css = getValueCSS()
    let js = getValueJS()
    document.getElementById('view').srcdoc = css + html + js
}

function getValueHTML() {
    let html = AREAHTML.value
    return html
}

function getValueCSS() {
    let css = AREACSS.value
    return `<style>${css}</style>`
}

function getValueJS(e) {
    let js = AREAJS.value
    return `<script>${js}</script>`
}