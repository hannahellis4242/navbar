function pageData(pageTitle) {
    this.data = {
        title: pageTitle,
        nav: [{
                label: 'Home',
                ref: '/'
            },
            {
                label: 'About',
                ref: '/about'
            },
            {
                label: 'Users',
                ref: '/users'
            },
        ]
    };
}

exports.pageData = pageData;