"use client";
import style from "./proveb.module.scss";
import AppE1121 from "@/app/_components/ArticleWrapperLayout/_components/AppE1121/AppE1121";
import ArticleWrapperLayout from "@/app/_components/ArticleWrapperLayout/ArticleWrapper";
import ArticlePhoto from "@/app/_components/ArticleWrapperLayout/_components/ArticlePhoto/ArticlePhoto";
const crumbs = [
  {
    url: "https://features.ltn.com.tw/",
    cname: "專區",
  },
  {
    url: "https://features.ltn.com.tw/taiwanese",
    cname: "每日一台語",
  },
];
const banner = {
  image: "https://features.ltn.com.tw/assets/images/language/taiwanese.jpg",
  alt: "每日一台語",
  title: "每日一台語",
  url: "https://features.ltn.com.tw/taiwanese",
};

const taiwanese_info = {
  title: "歹瓜厚子，歹人厚言語。",
  voice: {
    word: "Pháinn kue kāu tsí, pháinn-lâng kāu giân-gí.",
    data_src: "https://features.ltn.com.tw/taiwanese/audio/tw_214_269551.mp3",
  },
  definition: "1. 壞瓜籽多，壞人話多。用來諷刺多話或是善於搬弄是非的人。",
  use_case: [
    {
      ch_word:
        "你毋通遐厚話，一支喙講袂煞，你無聽人講：「歹瓜厚子，歹人厚言語。」",
      word: "Lí m̄-thang hiah kāu-uē, tsi̍t ki tshuì kóng bē suah, lí bô thiann lâng kóng, “Pháinn kue kāu tsí, pháinn-lâng kāu giân-gí.”",
      voice_data_src:
        "https://features.ltn.com.tw/taiwanese/audio/tw_209_269811.mp3",
      ch: "(你別這麼愛說話，一張嘴巴說個不停，你沒聽人家說：「壞瓜籽多，壞人話多。」)",
    },
    {
      ch_word:
        "伊閣咧講人的歹話矣，𪜶老母就罵伊「歹瓜厚子，歹人厚言語」，伊就按呢恬去。",
      word: "I koh teh kóng lâng ê pháinn-uē--ah, in lāu-bú tō mē i “pháinn kue kāu tsí, pháinn-lâng kāu giân-gí”, i tsiū-án-ne tiām--khì.",
      voice_data_src:
        "https://features.ltn.com.tw/taiwanese/audio/tw_209_269811.mp3",
      ch: "(他又在說別人的壞話了，他媽媽罵他「壞瓜籽多，壞人話多」，他就閉嘴了。)",
    },
  ],
  source: "教育部臺灣台語常用詞辭典",
};

export default function Page() {
  return (
    <ArticleWrapperLayout
      breadcrumbs={crumbs}
      banner={banner}
      taiwanese_info={taiwanese_info}
    >
      {/* <div className={`${style.text} boxTitle boxText`} data-desc="內容頁"> */}
      {/* --------每日一句------- */}
      {taiwanese_info && (
        <>
          {/* --audio-- */}
          <audio id="mp3player"></audio>
          <div className={style.voice}>
            <span>Pe̍h-pe̍h pòo ní kah oo.</span>
            <button
              className={style.vBT}
              data-src="https://features.ltn.com.tw/taiwanese/audio/tw_209_269811.mp3"
            ></button>
          </div>
          <div className={`${style.text} boxTitle boxText`} data-desc="內容頁">
            <h6 className={style.Tit}>釋義</h6>
            <p>{taiwanese_info.voice.word}</p>
            <h6 className={style.Tit}>用例</h6>
            <div className={style.UseCases}>
              {taiwanese_info.use_case.map((item, index) => (
                <div key={index}>
                  <p>{item.ch_word}</p>
                  <p>
                    {item.word}
                    <button
                      className="vBT"
                      data-src={item.voice_data_src}
                    ></button>
                  </p>
                  <p className={style.ch}>{item.ch}</p>
                </div>
              ))}
              <hr />
            </div>

            <h6 className={style.Tit}>近義</h6>
            <div className={style.synonyms}>
              <p>
                ① 冤枉觀音媽偷食鹹膎。 Uan-óng Kuan-im-má thau tsia̍h kiâm-kê.
              </p>
            </div>

            <p>
              <strong>{taiwanese_info.source}</strong>
            </p>
            <AppE1121 />
          </div>
        </>
      )}
      {/* </div> */}
    </ArticleWrapperLayout>
  );
}

// export default function page() {
//   return (
//     <>
//       <Breadcrumbs items={crumbs} />
//       <Banner
//         image="https://features.ltn.com.tw/assets/images/language/taiwanese.jpg"
//         alt="每日一台語"
//         title="每日一台語"
//         url="https://features.ltn.com.tw/taiwanese"
//       />
//       {/* 內文 */}
//       <div className="whitecon">
//         <h1 className={style.taiwanese}>
//           <span className={style.SubTit}>每日一台語</span>白白布染甲烏。
//         </h1>

//         {/* 分享列 */}
//         <div className="function boxTitle" data-desc="分享列">
//           <a className="sharefb" data-desc="facebook" title="facebook"></a>
//           <a className="sharetwitter" data-desc="twitter" title="twitter"></a>
//           <a className="shareline" data-desc="line" title="line"></a>
//           <a className="print" title="列印" data-desc="列印"></a>
//           <a title="字體縮放" className="fontsize" data-desc="字體縮放"></a>
//         </div>

//         <audio id="mp3player"></audio>

//         <div className={style.voice}>
//           <span>Pe̍h-pe̍h pòo ní kah oo.</span>
//           <button
//             className={style.vBT}
//             data-src="https://features.ltn.com.tw/taiwanese/audio/tw_209_269811.mp3"
//           ></button>
//         </div>

//         <div className={`${style.text} boxTitle boxText`} data-desc="內容頁">
//           <h6 className={style.Tit}>釋義</h6>
//           <p>1. 白布硬要染成黑色。比喻刻意汙衊抹黑，顛倒是非。</p>
//           <h6 className={style.Tit}>用例</h6>
//           <div className={style.UseCases}>
//             <p>
//               選舉的時，真捷看著一寡候選人共無影無跡的代誌講甲若真的，正港是人咧講的「白白布染甲烏」。
//             </p>
//             <p>
//               Suán-kí ê sî, tsin tsia̍p khuànn-tio̍h tsi̍t-kuá hāu-suán-jîn kā
//               bô-iánn-bô-tsiah ê tāi-tsì kóng kah ná tsin--ê, tsiànn-káng sī
//               lâng teh kóng--ê “pe̍h-pe̍h-pòo ní kah oo”.
//               <button
//                 className="vBT"
//                 data-src="https://features.ltn.com.tw/taiwanese/audio/tw_209_26981-1.mp3"
//               ></button>
//             </p>
//             <p className={style.ch}>
//               (選舉的時候，很常看到一些候選人把子虛烏有的事情講得像真的，果然如人家所說的「顛倒黑白，指鹿為馬」。)
//             </p>
//             <hr />
//           </div>

//           <h6 className={style.Tit}>近義</h6>
//           <div className={style.synonyms}>
//             <p>① 冤枉觀音媽偷食鹹膎。 Uan-óng Kuan-im-má thau tsia̍h kiâm-kê.</p>
//           </div>

//           <p>
//             <strong>資料來源：教育部臺灣台語常用詞辭典</strong>
//           </p>
//           <AppE1121 />
//         </div>
//       </div>
//     </>
//   );
// }
