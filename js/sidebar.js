function showIframe(iframeId) {
            var iframes = document.querySelectorAll('iframe');
            iframes.forEach(function(iframe) {
                iframe.style.display = 'none';
            });

            document.getElementById(iframeId).style.display = 'block';

            var items = document.querySelectorAll('.sidebar ul li');
            items.forEach(function(item) {
                item.classList.remove('active');
            });

            event.target.classList.add('active');
        }
