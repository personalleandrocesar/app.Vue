// if (window.location.protocol != "https:") {
//     window.location.href = "https:" + window.location.href.substring(window.location.protocol.length);
// }
export default{

    methods: {
    scrollToTop() {
        window.scrollTo(0, 0);
    }
}
}