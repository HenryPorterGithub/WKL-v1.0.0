        //grow top half of title rectangle
        function topGrow(doLater) {
            var elem = document.getElementById("titleContainer2");
            var pos = 0;
            var id = setInterval(frame, 1);

            //responsive javascript

            //extra small
            if (document.documentElement.clientWidth <= 768) {
                var max = 400;
            }

            //small
            if (document.documentElement.clientWidth <= 768) {
                var max = 400;
            }

            //medium
            if (document.documentElement.clientWidth <= 992) {
                var max = 400;
            }

            //large:extra large
            if (document.documentElement.clientWidth > 992) {
                var max = 500;
            }


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

            //extra small
            if (document.documentElement.clientWidth <= 768) {
                var max = 400;
            }

            //small
            if (document.documentElement.clientWidth <= 768) {
                var max = 400;
            }

            //medium
            if (document.documentElement.clientWidth <= 992) {
                var max = 400;
            }

            //large:extra large
            if (document.documentElement.clientWidth > 992) {
                var max = 500;
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
            alert(href);
            return false;
        }
        
        //google +
        function gshareCurrentPage() {
            window.open("https://plus.google.com/share?url=" + escape(window.location.href) + "&t=" + document.title, '',
                'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');

            return false;
        }

        //stumble upon
        function sushareCurrentPage() {
            window.open("http://www.stumbleupon.com/badge?url" + escape(window.location.href) + "&t=" + document.title, '',
                'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
            
            return false;
        }

        //twitter
        function tshareCurrentPage() {
            window.open("https://twitter.com/home?status=" + escape(window.location.href) + "&t=" + document.title, '',
                'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
            return false;
        }


