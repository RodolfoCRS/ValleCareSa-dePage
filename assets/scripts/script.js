const btnMobile = document.getElementById('btnmobile')
        function toggleMenu () {
            const nav = document.getElementById('nav')
            nav.classList.toggle('active')
        }
        btnMobile.addEventListener('click', toggleMenu)