const btnOpenShare = document.querySelector("#btn-open-share");

if (window.innerWidth < 960) {
    const shareSection = document.querySelector("#share-section");
    const articleInfoSection = document.querySelector("#article-info-section");
    const articleFooter = document.querySelector(".article__footer");

    btnOpenShare.addEventListener("click", openShareHandler);
    document.querySelector("#btn-close-share").addEventListener("click", closeShareHandler);

    function openShareHandler() {
        articleFooter.classList.add("article__footer--share");
        shareSection.classList.replace("display-none", "display-grid");
        setTimeout(() => {
            articleInfoSection.classList.replace("display-grid", "display-none");
        }, 350);
    }

    function closeShareHandler() {
        articleFooter.classList.remove("article__footer--share");
        articleInfoSection.classList.replace("display-none", "display-grid");
        setTimeout(() => {
            shareSection.classList.replace("display-grid", "display-none");
        }, 350);
    }
} else {
    btnOpenShare.addEventListener("click", handlePopover);
    function handlePopover() {
        const popover = document.querySelector(".article__popover");
        if (!popover) return;

        let rect = this.getBoundingClientRect();

        popover.style.left = rect.left - 108 + "px";
        popover.style.top = rect.top - 80 + "px";

        popover.togglePopover();
        btnOpenShare.classList.toggle("button-share--active");
    }
}

