        //grow top half of title rectangle
        function topGrow(doLater) {
            var elem = document.getElementById("titleContainer2");
            var pos = 0;
            var id = setInterval(frame, 1);

            //responsive javascript

            //large:extra large
            if (document.documentElement.clientWidth > 992) {
                var max = 500;
            }

            //medium
            if (document.documentElement.clientWidth <= 992) {
                var max = 400;
            }

            //small
            if (document.documentElement.clientWidth <= 768) {
                var max = 400;
            }

            //extra small
            if (document.documentElement.clientWidth <= 576) {
                var max = 200;
            }

            console.log(max);

            function frame() {
                if (pos == max) { //maximum height
                    doLater(); /* rotate functon takes place after grow function ends */
                    clearInterval(id);
                } else {
                    pos++;
                    elem.style.height = pos + 'px';
                }
            }
        }

        function topRotate() { //grow top half of title rectangle
            var elem = document.getElementById("titleContainer2");
            var elem2 = document.getElementById("homeTitle");
            var pos = 0;
            var id = setInterval(frame, 30);

            function frame() {
                if (pos == 45) { //maximum height
                    clearInterval(id);
                } else {
                    pos++;
                    elem.style.transform = "rotate(" + pos + "deg)";
                    elem2.style.transform = "rotate(" + -pos + "deg)";
                }
            }
        }

        function bottomGrow(doLater) { //grow bottom half of rectangle
            var elem = document.getElementById("sloganContainer2");
            var pos = 0;
            var id = setInterval(frame, 1);

            //responsive javascript          

            //large:extra large
            if (document.documentElement.clientWidth > 992) {
                var max = 500;
            }

            //medium
            if (document.documentElement.clientWidth <= 992) {
                var max = 400;
            }

            //small
            if (document.documentElement.clientWidth <= 768) {
                var max = 400;
            }

            //extra small
            if (document.documentElement.clientWidth <= 576) {
                var max = 200;
            }


            function frame() {
                if (pos == max) {
                    doLater(); /* rotate functon takes place after grow function ends */
                    clearInterval(id);
                } else {
                    pos++;
                    elem.style.height = pos + 'px';
                }
            }
        }

        function bottomRotate() { //grow top half of title rectangle
            var elem = document.getElementById("sloganContainer2");
            var elem2 = document.getElementById("homeSlogan");
            var pos = 0;
            var id = setInterval(frame, 30);

            function frame() {
                if (pos == 45) { //maximum height
                    clearInterval(id);
                } else {
                    pos++;
                    elem.style.transform = "rotate(" + pos + "deg)";
                    elem2.style.transform = "rotate(" + -pos + "deg)"
                }
            }
        }

        function sectionGrow(id) { //antimate section title
            var elem = document.getElementById(id);
            var pos = 0;
            var id = setInterval(frame, 1);

            function frame() {
                if (pos == 500) {
                    clearInterval(id);
                } else {
                    pos++;

                    elem.style.height = pos + "px";
                    elem.style.border = "" + pos + "px solid blue;";
                }
            }
        }

        //social media share buttons
        //facebook
        function fbshareCurrentPage() {
            window.open("https://www.facebook.com/sharer/sharer.php?u=" + escape(window.location.href) + "&t=" + document.title, '',
                'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
            return false;
        }

        //twitter
        var link = document.getElementById('tweetShare');
        var urlt = window.location;

        link.addEventListener('click', function (event) {
            event.preventDefault();
            window.open("https://twitter.com/share?url=" + encodeURIComponent(urlt));
        }, false);

        //facebook
        var link = document.getElementById('fbShare');
        var urlfb = window.location;

        link.addEventListener('click', function (event) {
            event.preventDefault();
            window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(urlfb));
        }, false);

        //navbar smoothscroll
