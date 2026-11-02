// ============================================
//  薪水換熱量 - 餐廳清單
//  新增餐廳:複製一整行 { ... }, 貼在最後面,改內容即可
//
//  name     餐廳名稱(必填)
//  area     地區(選填)
//  category 類別(選填)
//  modes    ["內用"]、["外帶"] 或 ["內用","外帶"]
//  price    價位(選填)
//  note     備註(選填)
//  map      Google 地圖連結(選填,不填會自動用店名搜尋)
// ============================================

const RESTAURANTS = [

  // ---------- 港墘路 ----------
  { name:"松旺豬腳", area:"港墘路", category:"", modes:["內用","外帶"] },

  // ---------- 江南街 ----------
  { name:"瑞哥雞肉飯", area:"江南街", category:"", modes:["外帶"] },
  { name:"溫泉雞",     area:"江南街", category:"", modes:["外帶"] },
  { name:"豐禾便當",   area:"江南街", category:"", modes:["外帶"] },
  { name:"夯客食堂",   area:"江南街", category:"", modes:["內用","外帶"] },
  { name:"陶鍋",       area:"江南街", category:"", modes:["內用"] },
  { name:"韓膳樓",     area:"江南街", category:"", modes:["內用"] },
  { name:"牛閣",       area:"江南街", category:"", modes:["內用"] },

  // ---------- 瑞光路 ----------
  { name:"Subway",           area:"瑞光路", category:"", modes:["外帶"] },
  { name:"Haloa夏威夷拌飯",  area:"瑞光路", category:"", modes:["外帶"] },
  { name:"麥當勞",           area:"瑞光路", category:"", modes:["外帶"] },
  { name:"美好時光餐盒",     area:"瑞光路", category:"", modes:["外帶"] },
  { name:"金春喜韓廚",       area:"瑞光路", category:"", modes:["內用"] },

];
