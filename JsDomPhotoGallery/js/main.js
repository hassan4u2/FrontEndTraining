
// async - get a random image URL
const getRandomImage = async () => {
    let imgId = Math.floor(Math.random() * (1000 - 500 + 1) + 500);
    let imgURL = `https://picsum.photos/id/${imgId}/500/500`;
    try {
        let response = await fetch(imgURL);
        if (response.status === 404) {
            // avoid infinite recur
            const MAX_RECURSIVE_CALLS = 3;
            let count = 1;
            while (count <= MAX_RECURSIVE_CALLS) {
                let newImage = await getRandomImage();
                if (newImage) { return newImage };
                count++;
            }
            // default image URL if all recru calls failed
            return 'https://picsum.photos/500/500';
        } else {
            return imgURL;
        }
    } catch (error) {
        console.warn(error);
        return 'https://picsum.photos/500/500';
    }
};
// init header
const initHeader = async () => {
    const header = document.getElementsByTagName('header');
    let headerHTML = `<h1 class="prepare-header text-center text-light pb-5">DOM Gallery</h1>`;

    header[0].innerHTML = headerHTML;
    setTimeout(function () {
        document.querySelector(".header h1").classList.add("smooth-header");
    }, 100);
};

// async init the items try & catch
const initItems = async (itemsCount) => {
    try {
        const items = document.getElementsByClassName('items');
        let allItems = '';
        for (let i = 0; i < itemsCount; i++) {
            let randomImageUrl = await getRandomImage();
            allItems += `
                <div class="item  col-12 col-md-4 col-lg-3 text-center p-3">
                    <div class="item-image">
                    <div style="position:relative;" class="overflow-hidden">
                        <div class="imgbox rounded-4 overflow-hidden">
                            <img src="${randomImageUrl}" alt="ImageApi" class="img-fluid scale-img rounded-4">
                        </div>
                        <div class="bg-light opacity-50 w-75 px-3 py-2 rounded-3 position-absolute start-50 top-50 translate-middle">
    
                            <span class="display-4 fs-4">Img ${i + 1}</span>
                            <p class="fs-6 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                        </div>
                        </div>
                    </div>
                    
                </div>
            `;
        }
        // add items to DOM
        items[0].innerHTML = allItems;
        document.querySelector(".items").classList.remove("d-none");
        document.querySelector(".items").classList.add("text-dark", "p-3", "d-flex", "flex-wrap", "justify-content-center");
    } catch (error) {
        // see error
        console.error(error);

    }
};

const generateHTML = async (itemsCount) => {
    let overlayBox;
    let allImagesUrls = [];
    // init items with random images
    await initItems(itemsCount);

    // show overlayBox event
    allImages = Array.from(document.querySelectorAll(".imgbox img"));
    allImages.forEach((image) => {
        allImagesUrls.push(image.src);
        image.addEventListener("click", (e) => {
            console.log(e.target.src);
            overlayBox = document.getElementById("overlayBox");
            overlayBox.classList.replace("d-none", "d-flex");
            overlayBox.innerHTML = `
                <div class="imgbox position-relative" style="width:500px; height:500px;">
                    <img src="https://picsum.photos/500/500" alt="ImageApi" class="img-fluid rounded-4" />
                    <div class="itemsbox">
                        <button id="exitBtn" type="button" class="btn position-absolute btn-danger rounded-circle"
                            style="top: 10px; left: 10px;">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="itemsbox d-flex align-content-center justify-content-between w-100 h-100">
                        <button id="rightBtn" type="button" class="btn position-absolute btn-light rounded-circle "
                            style="top: 50%; left:10px;">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <button id="leftBtn" type="button" class="btn position-absolute btn-light rounded-circle "
                            style="top: 50%; right:10px;">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
                `;
            let exitBtn = document.getElementById("exitBtn");
            let rightBtn = document.getElementById("rightBtn");
            let leftBtn = document.getElementById("leftBtn");
            let imgBox = document.getElementById("overlayBox").querySelector("img");
            let imgIndex = allImagesUrls.indexOf(e.target.src);
            imgBox.src = allImagesUrls[imgIndex];
            // exitBtn event
            exitBtn.addEventListener("click", () => {
                overlayBox.classList.replace("d-flex", "d-none");
            });
            // rightBtn event
            rightBtn.addEventListener("click", () => {
                imgIndex--;
                if (imgIndex < 0) {
                    imgIndex = allImagesUrls.length - 1;
                }
                imgBox.src = allImagesUrls[imgIndex];
            });
            // leftBtn event
            leftBtn.addEventListener("click", () => {
                imgIndex++;
                if (imgIndex > allImagesUrls.length - 1) {
                    imgIndex = 0;
                }
                imgBox.src = allImagesUrls[imgIndex];
            });
        });
    });
};

/////////////////////////////////////////////
const init = async (itemsCount) => {
    // init header
    await initHeader();

    // generate HTML
    await generateHTML(itemsCount);

};

let itemsCount = 20;
init(itemsCount);
/////////////////////////////////////////////
