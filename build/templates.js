angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("about/about.html","<div layout=\"row\">\n    <div id=\"about\" layout=\"column\" layout-align=\"start start\">\n        <es-headline text=\"About\"></es-headline>\n        <div layout=\"column\" layout-align=\"start start\">\n            <div>\n                <div flex=\"80\">\n                    <h3 class=\"md-title\">Welcome to Empire State Photography</h3>\n                    <p class=\"md-body-1\">\n                        Empire State Photography is a new portraiture studio located in the heart of Gloucester. We aim to bring photography full of New York spirit and American style right to the Gloucester high street.\n                    </p>\n                </div>\n                <div flex=\"80\">\n                    <h3 class=\"md-title\">Come on in...</h3>\n                    <p class=\"md-body-1\">\n                        Every shoot at Empire State offers a bespoke service to our clients. We make sure to craft a specific and unique experience for you, starting with a cup of coffee and an in-depth chat with our photographer. If you have any special requests or requirements, please let us know. We want to make sure we understand what you’re looking for and what makes you ‘you’ before we begin. That way, we’re sure to capture the look and feel you’re after!\n                    </p>\n                    <p class=\"md-body-1\">\n                        Once we’re ready to begin, you’ll have up to an hour in the studio with your photographer. We’ll use a number of different backdrops and lighting setups to create a massive variety of shots, and we’ll choose the best to put in your album. These will then be professionally edited. After a short break, you’ll be able to view the photos that day and pick the ones you like.\n                    </p>\n                    <p class=\"md-body-1\">\n                        We’ll be with you every step of the way so you feel confident and comfortable. We put you in the heart of the image; our skills craft centrepieces that tell a thousand words, with you as the stars.\n                    </p>\n                </div>\n                <div flex=\"80\">\n                    <h3 class=\"md-title \">Our Approach is Flexible!</h3>\n                    <p class=\"md-body-1\">\n                        We can accommodate groups of eight people or less, and we can serve clients with any relation to each other. Whether you’re after a new set of family portraits, a lovely shot of your new baby, an album to commemorate your engagement, or a fun outing with friends, we’re sure we can get you the photos you’re looking for.\n                    </p>\n                    <p class=\"md-body-1\">\n                        We want you to relax and be yourselves, and let us help you shine.\n                        <br>Well-behaved pets are also welcome!\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");
$templateCache.put("disclaimer/disclaimer.html","<md-content layout=\"row\" layout-align=\"center center\" layout-padding>\n    <small class=\"md-caption\">\n        Empire State Photography and Design Services Ltd, trading as Empire State Photography and Empire State Photography and Design, Company Number 10261448. Registered company address: “Cae Rhys Ddu”, Llansannor, Nr Cowbridge, CF71 7RW.\n    </small>\n    <small class=\"md-caption\">\n        Empire State Photography is a portraiture business with a studio based in Gloucester. We also have the ability to service locations in the South West, Midlands and Wales.\n    </small>\n</md-content>\n");
$templateCache.put("contact/contact.html","<div id=\"contact\" layout=\"column\" ng-init=\"initMap()\">\n    <es-headline text=\"Contact\"></es-headline>\n    <div layout=\"row\" layout-align=\"start start\" flex=\"80\">\n        <div flex=\"50\">\n            <h2 class=\"md-title \">\n                Gloucester\n            </h2>\n            <h4 class=\"md-subhead address-line md-3-line \">\n                <h4 class=\"md-subhead \">\n                    2-4a Southgate Street\n                    <br>Gloucester\n                    <br>GL1 2DH\n                    <br>T: 01452 310002\n                    <br>E: bookings@empirestatephotography.co.uk\n                </h4>\n\n            </h4>\n            <md-divider class=\"divider\"></md-divider>\n            <div>\n                <p class=\"md-body-1\">\n                    That’s right on ‘the Cross,’ just above Vodafone in the centre of the City.\n                </p>\n                <p class=\"md-body-1\">\n                    You can call us at our studio number during opening hours or email us with any enquiries. We’d love to hear from you!\n                </p>\n\n                <p class=\"md-body-1\">\n                    If you already know what you’re looking for and have a suitable date and time in mind, you can use our automated booking service to secure your slot.\n                </p>\n            </div>\n        </div>\n        <div id=\"map-wrapper\" layout-margin flex=\"50\" layout=\"row\" layout-align=\"center start\">\n            <div id=\"map\"></div>\n        </div>\n    </div>\n</div>\n");
$templateCache.put("logo/logo.html","<img src=\"/logo/logo.png\" alt=\"Logo\">\n");
$templateCache.put("main/main.html","<div id=\"main\" layout-fill>\n    <div id=\"main-inner\" layout-fill layout=\"row\" layout-sm=\"column\" layout-xs=\"column\">\n        <navigation></navigation>\n        <div id=\"content-view\" flex ui-view layout-fill layout=\"column\" md-whiteframe=\"0\"></div>\n    </div>\n</div>\n</div>\n");
$templateCache.put("navigation/navigation.html","<md-sidenav class=\"md-sidenav-left\" md-component-id=\"left\" md-disable-backdrop id=\"navigation\" md-whiteframe=\"4\" md-is-locked-open=\"$mdMedia(\'gt-xs\')\" layout=\"column\" layout-padding layout-fill>\n\n    <md-header flex>\n        <logo id=\"logo\"></logo>\n    </md-header>\n\n    <div flex></div>\n\n    <md-list class=\"link-list\" layout=\"column\" layout-align=\"start start\">\n        <md-list-item class=\"nav-list-item md-body-2\" ui-sref=\"app.home\">\n            Home\n        </md-list-item>\n        <md-list-item class=\"nav-list-item md-body-2\" ui-sref=\"app.about\">\n            About\n        </md-list-item>\n        <md-list-item class=\"nav-list-item md-body-2\" ui-sref=\"app.contact\">\n            Contact\n        </md-list-item>\n        <md-list-item class=\"nav-list-item md-body-2\" ui-sref=\"app.pricing\">\n            Pricing\n        </md-list-item>\n        <md-list-item class=\"nav-list-item md-button md-primary md-button\" id=\"timely\" timely-button ng-click=\"bookAppointment()\">\n            Book Appointment\n        </md-list-item>\n    </md-list>\n</md-sidenav>\n");
$templateCache.put("photo/photo.html","<md-dialog>\n    <md-dialog-content layout-fill layout-align=\"center center\">\n        <md-card>\n            <div class=\"info-buttons\">\n                <md-button ng-click=\"toggleInfo()\" class=\"md-fab md-mini md-raised\" aria-label=\"Info\">\n                    <md-icon md-font-icon=\"fa fa-lg fa-info\" class=\"fa fa-lg fa-info\"></md-icon>\n                </md-button>\n            </div>\n\n            <img id=\"dialog-photo\" layout-fill ng-src=\"{{ currentPhoto.display_url }}\" alt=\"Current Photo\">\n            <div ng-show=\"infoEnabled\">\n                <md-card-title>\n                    <md-card-title-text>\n                        <span class=\"md-title\">Description</span>\n                    </md-card-title-text>\n                </md-card-title>\n                <md-card-content>\n                    <p>\n                      {{ currentPhoto.description }}\n                    </p>\n                </md-card-content>\n                <md-card-actions layout=\"row\" layout-align=\"end center\">\n                    <md-button ng-click=\"toggleInfo(false)\">Close</md-button>\n                </md-card-actions>\n            </div>\n        </md-card>\n\n    </md-dialog-content>\n</md-dialog>\n");
$templateCache.put("pricing/pricing.html","<div id=\"pricing\" layout-padding layout-margin>\n    <es-headline text=\"Packages & Pricing\"></es-headline>\n    <div layout=\"row\" flex=\"80\" layout-align=\"start start\">\n        <div layout-padding flex=\"50\">\n            <p class=\"md-body-1\">\n                The price of our basic package is £15. There is also a refundable £25 security deposit to pay at time of booking to insure us against non-attendance. This deposit is returned to you on the day, upon the conclusion of the photoshoot.\n            </p>\n            <p class=\"md-body-2\">This basic package includes:</p>\n            <div class=\"bullets\">\n                <p class=\"md-body-1 bullet\">\n                    A consultation prior to the shoot, to ensure we can deliver the best results to you.\n                </p>\n                <p class=\"md-body-1 bullet\">\n                    A full photoshoot experience in our custom-designed studio, conducted by a skilled photographer.\n                </p>\n                <p class=\"md-body-1 bullet\">\n                    The best images from the shoot will be compiled into an album of 50 - 90 shots, so you’ll have plenty to choose from!\n                </p>\n                <p class=\"md-body-1 bullet\">\n                    Editing of the selected images with state-of-the-art image editing software by an experienced professional, to ensure that your photos meet the highest standards of quality.\n                </p>\n                <p class=\"md-body-1 bullet\">\n                    A cinematic viewing of your finished album on the same day.\n                </p>\n                <p class=\"md-body-1 bullet\">\n                    A digital copy of your favorite image on a DVD. This includes the copyright to the image, so you can use it however you see fit. We’re more than happy to provide printing advice on request!\n                </p>\n            </div>\n        </div>\n        <div layout-padding flex=\"50\">\n            <p class=\"md-body-1\">\n                Additional digital images can be purchased at competitive prices. We are also able to offer a selection of canvases and prints at the following standard price points:\n            </p>\n            <div layout=\"column\">\n                <p class=\"md-body-2\">Canvas:</p>\n                <div class=\"bullets\">\n                    <p class=\"md-body-2 bullet\">40cm x 30cm: <span class=\"md-body-1\">£50 per canvas</span></p>\n                    <p class=\"md-body-2 bullet\">50cm x 40cm: <span class=\"md-body-1\">£70 per canvas</span></p>\n                    <p class=\"md-body-2 bullet\">60cm x 40cm: <span class=\"md-body-1\">£90 per canvas</span></p>\n                    <p class=\"md-body-2 bullet\">80cm x 60cm: <span class=\"md-body-1\">£150 per canvas</span></p>\n                </div>\n                <p class=\"md-body-2\">Prints:</p>\n                <div class=\"bullets\">\n                    <p class=\"md-body-2 bullet\">6in x 4in: <span class=\"md-body-1\">£25 per print</span></p>\n                    <p class=\"md-body-2 bullet\">7in x 5in: <span class=\"md-body-1\">£30 per print</span></p>\n                    <p class=\"md-body-2 bullet\">8in x 10in: <span class=\"md-body-1\">£35 per print</span></p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");
$templateCache.put("photo-album/photo-album.html","<div id=\"photo-album\" class=\"md-primary\" layout=\"column\" layout-fill>\n    <div layout=\"column\" layout-fill>\n        <div id=\"category-filter\">\n            <div layout=\"row\" layout-fill>\n                <md-input-container>\n                    <label>Categories</label>\n                    <md-select ng-model=\"selectedCategories\" multiple>\n                        <md-optgroup label=\"Categories\">\n                            <md-option ng-value=\"key\" ng-repeat=\"(key, category) in categories\">{{ category }}</md-option>\n                        </md-optgroup>\n                    </md-select>\n                </md-input-container>\n            </div>\n        </div>\n\n        <md-grid-list md-cols=\"{{ columnCount }}\" md-row-height=\"1:1\" md-gutter=\"20px\" layout=\"column\" layout-fill>\n            <md-grid-tile ng-repeat=\"(id, photo) in photos\" md-rowspan=\"{{ photo.rowSpan }}\" md-colspan=\"{{ photo.colSpan }}\" class=\"photo-tile\" ng-if=\"inCategories(photo.category)\">\n                <img class=\"photo-image\" ng-src=\"{{ photo.image_url }}\" style=\"height: {{ photo.scaledH }}; width: {{ photo.scaledW }};\" layout-fill ng-click=\"showInfo($event, photo)\" id=\"{{ photo.id }}\">\n            </md-grid-tile>\n        </md-grid-list>\n    </div>\n</div>\n");
$templateCache.put("style/es-headline.html","<div>\n  <h1 class=\"md-display-1\">{{ text }}</h1>\n</div>\n");}]);