import {ADD_PHOTO} from '../../constans'

const defaultPhotos = [
    "https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/common/swbf2-section-bg-about-top-celebration-edition-xl.jpg.adapt.320w.jpg",
    "https://media.contentapi.ea.com/content/dam/gin/images/2017/01/star-wars-battlefront-key-art.jpg.adapt.crop191x100.628p.jpg",
    "https://i2.wp.com/itc.ua/wp-content/uploads/2019/08/rise-of-skywalker.jpeg",
    "https://3dnews.ru/assets/external/illustrations/2017/11/27/962092/sw%20battlefront%202%20art.jpg",
    "https://fix-note.ru/wp-content/uploads/2020/08/DEpYy8jSdvD9dkvVDSPNoD-650-80-1.jpg",
    "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
    "https://data4.origin.com/asset/content/dam/originx/web/app/games/star-wars/star-wars-squadrons/features/maverick_pdp_prefeature_mission_en_ww_v1.jpg/864772b4-37cc-4f6d-b3f0-d144e29ea5c5/original.jpg",
  ]

export default (state = defaultPhotos, action) => {
    switch(action.type){
        case ADD_PHOTO:
            return [
                ...state, action.payload.photo,
            ]
        default:
            return state;
    }
}