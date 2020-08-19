export const home = (request, response) => 
    response.render("home", { pageTitle: "Home" });

export const search = (request, response) => {
    const {
        query: { term: searchingBy }
    } = request;
    response.render("search", { pageTitle: "Search", searchingBy });
};

export const videos = (request, response) => 
    response.render("videos", { pageTitle: "Videos" });

export const upload = (request, response) => 
    response.render("upload", { pageTitle: "Upload" });

export const videoDetail = (request, response) => 
    response.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (request, response) => 
    response.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (request, response) => 
    response.render("deleteVideo", { pageTitle: "Delete Video" });