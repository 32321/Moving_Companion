/**
 * Created by zlh on 2018.03.19.
 */
function loadData() {
    var $body=$("body");
    var $wikiElem=$("#wikipedia-links");
    var $nytHeaderElem=$("#nytimes-header");
    var $nytElem=$("#nytimes-articles");
    var $greeting=$("#greeting");

    //在重新请求时，清除之前的数据
    $wikiElem.text("");
    $nytElem.text("");

    var streetStr=$("#street").val();
    var cityStr=$("#city").val();
    var address=streetStr+","+cityStr;

    $greeting.text('So,you want to live at'+address+'?');

    //加载地图
    var streetviewUrl='http://maps.googleapis.com/maps/api/streetview?size=600x400&location='+address;
    $body.append("<img class='bgimg' src=streetviewUrl>");

    var nytimeUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    nytimeUrl +='?q='+cityStr+'&sort=newest&api-key=6509ec0d075a46398358c97de1ad58a0';


}