var base64 = require("../pages/components/images/base64");
let flowerListNav = [
  {
    name: '木本花卉',
    list: [
      { name: '月季花', doc: '月季花（学名：Rosa chinensis Jacq.）：被称为花中皇后，又称“月月红”，是常绿、半常绿低矮灌木，四季开花﹐一般为红色﹐或粉色、偶有白色和黄色﹐可作为观赏植物，也可作为药用植物，亦称月季。有三个自然变种，现代月季花型多样，有单瓣和重瓣，还有高心卷边等优美花型；其色彩艳丽、丰富，不仅有红、粉黄、白等单色，还有混色、银边等品种；多数品种有芳香。月季的品种繁多，世界上已有近万种，中国也有千种以上。', price: 10, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' },
      { name: '梅花', doc: '梅花梅花梅花梅花梅花梅花梅花梅花梅花', price: 30, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' },
      { name: '桃花', doc: '桃花桃花桃花桃花桃花桃花桃花桃花桃花桃花', price: 60, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' },
      { name: '牡丹', doc: '牡丹牡丹牡丹牡丹牡丹牡丹牡丹牡丹牡丹牡丹牡丹', price: 10, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' },
      { name: '海棠花', doc: '海棠花海棠花海棠花海棠花海棠花海棠花海棠花海棠花', price: 30, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' },
      { name: '玉兰', doc: '玉兰玉兰玉兰玉兰玉兰玉兰玉兰玉兰玉兰玉兰玉兰玉兰', price: 40, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' },
      { name: '木笔', doc: '木笔木笔木笔木笔木笔木笔木笔木笔木笔木笔木笔木笔', price: 40, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' },
      { name: '紫荆', doc: '紫荆紫荆紫荆紫荆紫荆紫荆紫荆紫荆紫荆紫荆紫荆紫荆', price: 10, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' },
      { name: '连翘', doc: '连翘连翘连翘连翘连翘连翘连翘连翘连翘连翘连翘连翘', price: 10, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' },
      { name: '丁香', doc: '丁香丁香丁香丁香丁香丁香丁香丁香丁香丁香丁香丁香', price: 30, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' },
      { name: '杜鹃花', doc: '杜鹃花杜鹃花杜鹃花杜鹃花杜鹃花杜鹃花杜鹃花杜鹃花杜鹃花', price: 40, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' },
      { name: '栀子花', doc: '栀子花栀子花栀子花栀子花栀子花栀子花栀子花栀子花栀子花栀子花', price: 10, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' }
    ]
  },
  {
    name: '草本花卉',
    list: [
      { name: '虞美人', doc: '虞美人（学名：Papaver rhoeas L.）：一年生草本植物，全体被伸展的刚毛，稀无毛。茎直立，高25-90厘米，具分枝。叶片轮廓披针形或狭卵形，羽状分裂，裂片披针形。花单生于茎和分枝顶端，花蕾长圆状倒卵形，下垂；萼片2，宽椭圆形；花瓣4，圆形、横向宽椭圆形或宽倒卵形，长2.5-4.5厘米，全缘，稀圆齿状或顶端缺刻状，紫红色，基部通常具深紫色斑点。蒴果宽倒卵形，长1-2.2厘米，无毛，具不明显的肋。种子多数，肾状长圆形，长约1毫米。花果期3-8月。', price: 20, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' },
      { name: '风信子', doc: '风信子风信子风信子风信子风信子风信子风信子风信子风信子风信子', price: 20, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' },
      { name: '大波斯菊', doc: '大波斯菊大波斯菊大波斯菊大波斯菊大波斯菊大波斯菊大波斯菊大波斯菊', price: 20, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' },
      { name: '荷花', doc: '荷花荷花荷花荷花荷花荷花荷花荷花荷花', price: 20, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' },
      { name: '康乃馨', doc: '康乃馨康乃馨康乃馨康乃馨康乃馨康乃馨康乃馨康乃馨康乃馨', price: 20, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' },
      { name: '鸡冠花', doc: '鸡冠花鸡冠花鸡冠花鸡冠花鸡冠花鸡冠花鸡冠花鸡冠花鸡冠花鸡冠花', price: 20, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' }
    ]
  },
  {
    name: '盆花类',
    list: [
      { name: '夜来香', doc: '夜来香（学名：Telosma cordata (Burm. f.) Merr.）： 柔弱藤状灌木；小枝被柔毛，黄绿色，老枝灰褐色，渐无毛，略具有皮孔。叶膜质，卵状长圆形至宽卵形，叶脉上被微毛。伞形状聚伞花序腋生，着花多达30朵；花芳香，夜间更盛；花冠黄绿色，高脚碟状，花冠筒圆筒形，喉部被长柔毛，裂片长圆形，具缘毛，干时不折皱，向右覆盖；副花冠5片，膜质，着生于合蕊冠上，花柱短柱状，柱头头状，基部五棱。蓇葖披针形，外果皮厚，无毛；种子宽卵形，顶端具白色绢质种毛。花期5-8月，极少结果。', price: 60, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' },
      { name: '蝴蝶兰', doc: '蝴蝶兰蝴蝶兰蝴蝶兰蝴蝶兰蝴蝶兰蝴蝶兰蝴蝶兰蝴蝶兰蝴蝶兰蝴蝶兰', price: 10, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' },
      { name: '仙人掌', doc: '仙人掌仙人掌仙人掌仙人掌仙人掌仙人掌仙人掌仙人掌仙人掌仙人掌仙人掌', price: 10, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' },
      { name: '仙人球', doc: '仙人球仙人球仙人球仙人球仙人球仙人球仙人球仙人球仙人球仙人球', price: 10, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' },
      { name: '仙人指', doc: '仙人指仙人指仙人指仙人指仙人指仙人指仙人指', price: 10, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' },
      { name: '二月兰', doc: '二月兰二月兰二月兰二月兰二月兰二月兰二月兰二月兰二月兰', price: 10, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' },
      { name: '含羞草', doc: '含羞草含羞草含羞草含羞草含羞草含羞草含羞草', price: 10, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' },
      { name: '牵牛花', doc: '牵牛花牵牛花牵牛花牵牛花牵牛花牵牛花牵牛花牵牛花牵牛花牵牛花', price: 10, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' },
      { name: '四季海棠', doc: '四季海棠四季海棠四季海棠四季海棠四季海棠四季海棠四季海棠四季海棠四季海棠', price: 10, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' }
    ]
  },
  {
    name: '鲜切花',
    list: [
      { name: '美人蕉', doc: '美人蕉（学名：Canna indica L.）：多年生草本植物，高可达1.5米，全株绿色无毛，被蜡质白粉。具块状根茎。地上枝丛生。单叶互生；具鞘状的叶柄；叶片卵状长圆形。总状花序，花单生或对生；萼片3，绿白色，先端带红色；花冠大多红色，外轮退化雄蕊2-3枚，鲜红色；唇瓣披针形，弯曲；蒴果，长卵形，绿色，花、果期3-12月。', price: 60, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' },
      { name: '百合', doc: '百合百合百合百合百合百合百合百合百合百合', price: 30, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' },
      { name: '郁金香', doc: '郁金香郁金香郁金香郁金香郁金香郁金香郁金香郁金香', price: 40, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' },
      { name: '情人草', doc: '情人草情人草情人草情人草情人草情人草情人草情人草', price: 50, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' },
      { name: '马蹄莲', doc: '马蹄莲马蹄莲马蹄莲马蹄莲马蹄莲马蹄莲马蹄莲马蹄莲马蹄莲', price: 40, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' }
    ]
  },
  {
    name: '室内观叶植物',
    list: [
      { name: '文竹', doc: '文竹，又称云片松、刺天冬、云竹，拉丁文名：Asparagus setaceus，高可达几米。文竹根部稍肉质，茎柔软丛生，细长。茎的分枝极多，近平滑。叶状枝，刚毛状，略具三棱；鳞片状叶基部稍具刺状距或距不明显。花白色，有短梗，花期9~10月。浆果熟时呈现紫黑色，有1~3颗种子。[1]  果期冬季至翌年春季。', price: 60, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' },
      { name: '万年青', doc: '万年青万年青万年青万年青万年青万年青万年青万年青万年青', price: 50, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' },
      { name: '金心吊兰', doc: '金心吊兰金心吊兰金心吊兰金心吊兰金心吊兰金心吊兰', price: 40, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' },
      { name: '富贵竹', doc: '富贵竹富贵竹富贵竹富贵竹富贵竹富贵竹富贵竹', price: 40, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' },
      { name: '发财树', doc: '发财树发财树发财树发财树发财树发财树发财树发财树发财树', price: 50, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' },
      { name: '凤梨', doc: '凤梨凤梨凤梨凤梨凤梨凤梨凤梨凤梨凤梨凤梨凤梨凤梨凤梨凤梨凤梨凤梨', price: 30, imgurl: base64.icon60, url: '/pages/flowerDetail/flowerDetail' },
    ]
  }
]

module.exports = {
  flowerListNav: flowerListNav
}