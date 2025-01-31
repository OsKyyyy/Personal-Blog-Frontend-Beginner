import {useSelector} from "react-redux";


const testt = () =>{
    const $ = useSelector((state) => state.global.jQuery)
    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function(){
        $('.js-fullheight').css('height', $(window).height());
    });
}
export default testt;

