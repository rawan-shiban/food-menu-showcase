window.addEventListener('load', function () {

    let lastActiveItem = null;

    // _____________ Banner Section Active ______________
    const binnerSictionList = document.querySelectorAll('.banner-section');
    binnerSictionList.forEach(function (section) {
        section.addEventListener('click', function (e) {
            e.preventDefault();
            binnerSictionList.forEach(function (el) {
                el.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    //____________ Banner Btn & close Btn --> Banner Active __________
    const banner = document.querySelector('.banner');
    const bannerBtn = document.querySelectorAll('.banner-btn');
    const closeBtn = document.querySelectorAll('.close-btn');


    bannerBtn.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            banner.classList.add('active');
            bannercontentActive(this.getAttribute('data-target'));
        });

    });


    closeBtn.forEach(btn => {
        btn.addEventListener('click', function (e) {

            e.preventDefault();
            banner.classList.remove('active');
            bannerContentHide();
        });
    })

    //____________  Content Active ____________ 
    const bannercontentActive = section => {
        const contentActiveList = document.querySelectorAll('.item');
        const cardsActiveList = document.querySelectorAll('.card');

        contentActiveList.forEach(content => {
            content.classList.remove('active');
            if (content.classList.contains(section)) {
                content.classList.add('active');
                lastActiveItem = content;
            }
        });
        cardsActiveList.forEach(content => {
            content.classList.remove('active');
        })
    };



    //____________  Card Food Btn ____________


    const infoBtn = document.querySelectorAll('.info-btn');

    infoBtn.forEach(btn => {

        // Hide Item product
        btn.addEventListener('click', function (e) {
            e.preventDefault();

            const activeItems = document.querySelectorAll('.item.active');
            if (activeItems.length > 0) {
                lastActiveItem = activeItems[0];
                console.log('saved active items', lastActiveItem)
            }
            //____________  Item Hide ___________
            const contentHideList = document.querySelectorAll('.item');

            contentHideList.forEach(content => {
                content.classList.remove('active');


            })


            //___________ show cards daitels ___________
            const contentDitelsActive = (cards) => {
                const contentDitelsList = document.querySelectorAll('.card');
                contentDitelsList.forEach(card => {

                    card.classList.remove('active');
                    if (card.classList.contains(cards)) {
                        card.classList.add('active');
                    }


                });
            };

            contentDitelsActive(this.getAttribute('data-target'));
        });

    });

    const closeBtnInfo = document.querySelectorAll('.close-btn-info');
    closeBtnInfo.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const cardHideList = document.querySelectorAll('.card');
            cardHideList.forEach(content => {
                content.classList.remove('active');
            })
            if (lastActiveItem) {
                document.querySelectorAll('.item').forEach(item => {
                    item.classList.remove('active');
                })
                lastActiveItem.classList.add('active');
            }
            else {
                const firstItem = document.querySelector('.item:first-child');
                if (firstItem) {
                    firstItem.classList.add('active');
                }
            }


        });
    })
})