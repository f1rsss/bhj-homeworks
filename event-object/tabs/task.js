document.querySelectorAll('.tabs').forEach(tabsBlock => {
    const tabs = tabsBlock.querySelectorAll('.tab');
    const contents = tabsBlock.querySelectorAll('.tab__content');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('tab_active'));
            tab.classList.add('tab_active');

            contents.forEach((content, ind) => {
                content.classList.toggle('tab__content_active', ind === index);
            });
        });
    });
});