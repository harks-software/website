import "./timeline.css";

const yrs = [
  { islamic: 11, gregorian: 632 },
  { islamic: 35, gregorian: 655 },
  { islamic: 40, gregorian: 660 },
  { islamic: 50, gregorian: 670 },
  { islamic: 61, gregorian: 680 },
  { islamic: 95, gregorian: 713 },
  { islamic: 114, gregorian: 732 },
  { islamic: 148, gregorian: 765 },
  { islamic: 183, gregorian: 799 },
  { islamic: 203, gregorian: 818 },
  { islamic: 220, gregorian: 835 },
  { islamic: 232, gregorian: 846 },
  { islamic: 250, gregorian: 864 },
  { islamic: 255, gregorian: 868 },
  { islamic: 260, gregorian: 873 },
  { islamic: 305, gregorian: 917 },
  { islamic: 329, gregorian: 940 },
  { islamic: 336, gregorian: 947 },
  { islamic: 381, gregorian: 991 },
  { islamic: 385, gregorian: 995 },
  { islamic: 413, gregorian: 1022 },
  {},
  { islamic: 460, gregorian: 1067 },
];

const aimmah = [{ name: "Imam Ali (as)", start: 3, span: 8 }];

function imams() {
  return [
    <>
      <div className="box imam col-span-8 col-start-3">IMAM ALI (A.S)</div>
      <div className="box imam col-span-4">IMAM AL-HASAN (A.S)</div>
      <div className="box imam col-span-4">IMAM AL-HUSSAIN (A.S)</div>
      <div className="box imam col-span-4">IMAM AS-SAJJAD (A.S)</div>
      <div className="box imam col-span-4">IMAM AL-BAQIR (A.S)</div>
      <div className="box imam col-span-4">IMAM AS-SADIQ (A.S)</div>
      <div className="box imam col-span-4">IMAM AL-KADHIM (A.S)</div>
      <div className="box imam col-span-4">IMAM AR-RIDHA (A.S)</div>
      <div className="box imam col-span-4">IMAM Al-JAWAD (A.S)</div>
      <div className="box imam col-span-11">IMAM Al-HADI (A.S)</div>
      <div className="box imam col-span-5">IMAM Al-ASKARI (A.S)</div>
      <div className="box imam" style={{ gridColumn: "span 39 / span 39" }}>
        IMAM Al-MAHDI (A.T.F.S)
      </div>
    </>,
  ];
}

function caliphs() {
  return [
    <>
      <div className="box caliph col-span-7 col-start-11 row-span-1 row-start-2">
        Muawiyah b. Abu Sufyan (d. 60)
      </div>
      <div className="box caliph col-span-2 col-start-[18] row-start-2">
        <p> Yazid </p>
        <p>(d.64)</p>
      </div>
      <div className="box caliph col-span-2 col-start-[20] row-start-2">
        <p> Muawiyah </p>
        <p>(d.64)</p>
        <p> Marwan </p>
        <p>(d.65)</p>
      </div>
      <div className="box caliph col-span-2 col-start-[22] row-span-2 row-start-1">
        <p> Abd al-Malik b. Marwan</p>
        <p>(d.86)</p>
        <p> Walid </p>
        <p>(d.96)</p>
        <p> Sulayman </p>
        <p>(d.99)</p>
      </div>
      <div className="box caliph col-span-2 col-start-[24] row-start-2">
        <p> Umar b. Abdulaziz </p>
        <p>(d.101)</p>
      </div>
      <div className="box caliph col-span-2 col-start-[26] row-start-2">
        <p> Hisham b. Abd al-Malik </p>
        <p>(105-125)</p>
      </div>
      <div className="box caliph abbasid col-span-2 col-start-[27] row-start-1">
        Abbasid Caliphate (132 AH)
      </div>
      <div className="box caliph abbasid col-span-2 col-start-[28] row-start-2">
        <p> as-Saffah </p>
        <p>(d.136)</p>
      </div>
      <div className="box caliph abbasid col-span-3 col-start-[30] row-span-2 row-start-1">
        <p> al-Mansur</p>
        <p>(d.158)</p>
        <p> al-Mahdi </p>
        <p>(d.169)</p>
        <p> al-Hadi </p>
        <p>(d.170)</p>
      </div>
      <div className="box caliph abbasid col-span-3 col-start-[33] row-start-2">
        <p> Harun ar-Rashid </p>
        <p>(d.193)</p>
      </div>
      <div className="box caliph abbasid col-span-5 col-start-[36] row-start-2">
        <p> al-Mamun </p>
        <p>(198-218)</p>
      </div>
      <div className="box caliph abbasid col-span-4 col-start-[41] row-start-2">
        <p> al-Mutasim </p>
        <p>(d.227)</p>
      </div>
      <div className="box caliph abbasid col-span-5 col-start-[45] row-start-2">
        <p> al-Mutawakkil </p>
        <p>(232 - 247)</p>
        <p> al-Muntasir </p>
        <p>(d.248)</p>
      </div>
      <div className="box caliph abbasid col-span-11 col-start-[50] row-start-2">
        <p> al-Mutamid </p>
        <p>(256 - 279)</p>
      </div>
      <div className="box caliph ghaybah col-span-2 col-start-[58] row-start-1">
        Minor Ghaybah Starts
      </div>
      <div className="box caliph ghaybah col-span-2 col-start-[66] row-start-1">
        Major Ghaybah Starts
      </div>
    </>,
  ];
}

function years() {
  return yrs.map((year, index) => {
    if (year.islamic) {
      return (
        <div key={year.islamic} className={`box year`}>
          <p>{year.islamic} AH</p>
          <p>{year.gregorian} CE</p>
        </div>
      );
    } else {
      /* Dummy div*/
      return <div className="col-span-4 row-start-[4]" key={index}></div>;
    }
  });
}

function companions() {
  return [
    <>
      <div
        className="box companion row-start-5"
        style={{ gridColumn: "span 22 / span 22", gridColumnStart: 3 }}
      >
        Abu Tufayl (d. 100)
      </div>
      <div
        className="box companion row-span-2 row-start-5 h-full"
        style={{ gridColumn: "span 8 / span 8", gridColumnStart: 27 }}
      >
        Jamil b. Darraj | Aban b. Uthman | Hisham b. Hakam | Hisham b. Salim (?)
      </div>
      <div
        className="box companion row-start-6"
        style={{ gridColumn: "span 18 / span 18", gridColumnStart: 3 }}
      >
        Jabir b. Abdullah Ansari (d.68 - 78)
      </div>
      <div
        className="box companion row-start-7"
        style={{ gridColumn: "span 11 / span 11", gridColumnStart: 20 }}
      >
        Zurarah b. A'yan (70 - 150)
      </div>
      <div
        className="box companion row-start-7"
        style={{ gridColumn: "span 12 / span 12", gridColumnStart: 31 }}
      >
        Muhammad b. Abi Umayr (d.217)
      </div>
      <div
        className="box companion row-start-7"
        style={{ gridColumn: "span 10 / span 10", gridColumnStart: 43 }}
      >
        Fadl b. Shadhan (?)
      </div>
      <div
        className="box companion row-start-[8]"
        style={{ gridColumn: "span 19 / span 19", gridColumnStart: 3 }}
      >
        Kumayl b. Ziyad (12 - 82)
      </div>
      <div
        className="box companion row-start-8"
        style={{ gridColumn: "span 10 / span 10", gridColumnStart: 27 }}
      >
        Hammad b. Uthman (d.190)
      </div>
      <div className="box companion row-start-9 col-span-4 col-start-3">
        Abu Dhar (d.32)
      </div>
      <div
        className="box companion row-start-9"
        style={{ gridColumn: "span 18 / span 18", gridColumnStart: 23 }}
      >
        Yunus b. Abd al-Rahman (d.208)
      </div>
      <div className="box companion row-start-10 col-span-4 col-start-3">
        Miqdad (d.33)
      </div>
      <div
        className="box companion row-start-10"
        style={{ gridColumn: "span 14 / span 14", gridColumnStart: 27 }}
      >
        Hammad b. Isa (d.209)
      </div>
      <div className="box companion row-start-11 col-span-4 col-start-3">
        Salman (d.36)
      </div>
      <div className="box companion row-start-11 col-span-8 col-start-[23] row-span-4 h-full">
        <p> Muhammad b. Muslim (d.150)</p>
        <p>Abdallah b. Bukayr</p>
        <p> Burayd b. Muawiyah</p>
        <p>Maruf b. Kharrabudh</p>
        <p>Fudayl b. Yasar</p>
      </div>
      <div className="box companion row-start-11 col-span-12 col-start-[31]">
        al-Hasan b. Mahbub (129/149 - 224)
      </div>
      <div className="box companion row-start-12 col-span-4 col-start-3">
        Ammar b. Yasir (d.37)
      </div>
      <div className="box companion row-start-12 col-span-10 col-start-[31]">
        Safwan b. Yahya (d.210)
      </div>
      <div
        className="box companion row-start-13"
        style={{ gridColumn: "span 16 / span 16", gridColumnStart: 3 }}
      >
        Maytham b. Tammar (d.60)
      </div>
      <div className="box companion col-span-10 col-start-[32] row-start-[13]">
        Ahmad b. Abi Nasr al-Bazanti (152 - 221)
      </div>
      <div className="box companion col-span-10 col-start-[20] row-start-[15]">
        Aban b. Taglib (d.141)
      </div>
      <div className="box companion col-span-10 col-start-[33] row-start-[14]">
        al-Hasan b. Ali b. al-Faddal (d.224)
      </div>
      <div
        className="box companion row-start-[16]"
        style={{ gridColumn: "span 4 / span 4", gridColumnStart: 27 }}
      >
        Mumin at-Taq (?)
      </div>
      <div className="box companion col-span-8 col-start-[31] row-span-2 row-start-[15] h-full">
        <p>Abd Allah b. al-Mughira (?)</p>
        <p>Faddala b. Ayyub (?)</p>
      </div>
      <div className="box companion col-span-11 col-start-[20] row-start-[17]">
        Abu Hamza ath-Thumali (d.150)
      </div>
      <div className="box companion col-span-8 col-start-[37] row-start-[17]">
        Husayn b. Said al-Ahwazi (?)
      </div>
      <div className="box companion col-span-5 col-start-[30] row-start-[18]">
        Abdallah b. Muskan (d.183)
      </div>
      <div className="box companion col-span-12 col-start-[29] row-start-[19]">
        Nasr b. Muzahim (d.212)
      </div>
      <div className="box companion col-span-7 col-start-[53] row-start-[13]">
        Usman b. Said al-Amri (d.265)
      </div>
      <div className="box companion col-span-6 col-start-[57] row-span-2 row-start-[14] h-full">
        Muhammad b. Usman b. Said al-Amri (d.305)
      </div>
      <div className="box companion col-span-9 col-start-[57] row-start-[16]">
        Husayn b. Ruh an-Nawbakhti (d.326)
      </div>
      <div className="box companion col-span-10 col-start-[57] row-start-[17]">
        Ali b. Muhammad al-Samuri (d.329)
      </div>
    </>,
  ];
}

function scholars() {
  return [
    <>
      <div
        className="box scholar row-start-5"
        style={{ gridColumn: "span 16 / span 16", gridColumnStart: 51 }}
      >
        Muhammad b. Yaqub al-Kulayni (250 - 329)
      </div>
      <div className="box scholar col-span-12 col-start-[71] row-start-5">
        Muhammad b. Muhammad b. al-Numan al-Baghdadi (d.413)
      </div>
      <div className="box scholar col-span-12 col-start-[63] row-start-6">
        Muhammad b. Ali al-Babuwayh al-Qummi (305-381)
      </div>
      <div className="box scholar col-span-12 col-start-[79] row-start-6">
        Muhammad b. al-Hasan at-Tusi (d.460)
      </div>
      <div className="box scholar col-span-3 col-start-[64] row-span-2 row-start-7 h-full">
        <p>al-Ayyashi</p>
        <p>(d.320)</p>
      </div>
      <div className="box scholar col-span-2 col-start-[70] row-span-2 row-start-7 h-full">
        <p>al-Kashshi</p>
        <p>(d.340)</p>
      </div>
      <div
        className="box scholar row-span-2 row-start-7 h-full"
        style={{ gridColumn: "span 15 / span 15", gridColumnStart: 74 }}
      >
        <p>Ahmad b. Ali an-Najashi (372 - 450)</p>
        <p>Ibn al-Ghadairi</p>
      </div>
      <div
        className="box scholar row-start-[8]"
        style={{ gridColumn: "span 22 / span 22", gridColumnStart: 39 }}
      >
        Ahmad b. Muhammad b. Khalid al-Barqi (200 - 280)
      </div>
      <div className="box scholar col-span-12 col-start-[41] row-start-[9]">
        Ahmad b. Muhammad b. Isa al-Ashari al-Qummi
      </div>
      <div className="box scholar col-span-9 col-start-[53] row-start-[9]">
        al-Saffar (d.290)
      </div>
      <div className="box scholar col-span-4 col-start-[71] row-span-3 row-start-[9]">
        <p>an-Numani</p>
        <p>(d.360)</p>
        <p>Ibn al-Qulawayh</p>
        <p>(d.368)</p>
      </div>
      <div className="box scholar col-span-3 col-start-[80] row-span-2 row-start-[9]">
        al-Khazzaz al-Qummi (d.400)
      </div>
      <div className="box scholar col-span-10 col-start-[41] row-start-[10]">
        Ibrahim b. Hashim (?)
      </div>
      <div
        className="box scholar row-start-[10]"
        style={{ gridColumn: "span 16 / span 16", gridColumnStart: 51 }}
      >
        Ali b. Ibrahim (?)
      </div>
      <div
        className="box scholar row-start-[11]"
        style={{ gridColumn: "span 14 / span 14", gridColumnStart: 53 }}
      >
        Sa'd b. Abdillah al-Qummi (?)
      </div>
      <div
        className="box scholar row-start-[12]"
        style={{ gridColumn: "span 18 / span 18", gridColumnStart: 49 }}
      >
        Abdullah b. Ja'far al-Himyari (?)
      </div>
    </>,
  ];
}

function books() {
  return [
    <>
      <div className="box book col-span-3 col-start-[19] row-span-3 row-start-[21]">
        <p>Kitab Sulaym (d.74)</p>
        <p>Sahifa as-Sajjadiyah</p>
      </div>
      <div className="box book col-span-3 col-start-[35] row-span-2 row-start-[21]">
        <p>Sahifa ar-Ridha</p>
      </div>
      <div className="box book col-span-3 col-start-[39] row-span-3 row-start-[21]">
        <p>Kitab az-Zuhd</p>
        <p>Kitab al-Mumin</p>
        <p>Waqiat Siffin (d.212)</p>
      </div>
      <div className="box book col-span-4 col-start-[51] row-span-3 row-start-[21]">
        <p>Kitab an-Nawadir</p>
        <p>(d.post 254/300)</p>
        <p>Masail Ali bin Ja'far</p>
      </div>
      <div className="box book col-span-4 col-start-[59] row-span-4 row-start-[21]">
        <p>al-Mahasin (d.280)</p>
        <p>Gharrat ath-Thaqafi (d.283)</p>
        <p>Basair ad-Darajat</p>
        <p>Qurb al-Isnad</p>
        <p>Tafsir al-Qummi</p>
      </div>
      <div className="box book col-span-3 col-start-[64] row-span-2 row-start-[21]">
        <p>al-Kafi</p>
        <p>Imamah wal Tabsirah</p>
      </div>
      <div className="box book col-span-4 col-start-[71] row-span-4 row-start-[21]">
        <p>al-Faqih</p>
        <p>Kamaluddin</p>
        <p>Ilal ash-Sharai</p>
        <p>at-Tawhid</p>
        <p>Ma'ani al-Akhbar</p>
        <p>Kamil az-Ziyarah</p>
        <p>Numani's Ghaybah</p>
      </div>
      <div className="box book col-span-4 col-start-[76] row-span-4 row-start-[21]">
        <p>Kitab al-Mazar</p>
        <p>al-Irshad</p>
        <p>al-Muqnia</p>
        <p>Kitab al-Jamal</p>
      </div>
      <div className="box book col-span-3 col-start-[81] row-span-2 row-start-[21]">
        <p>Kifayat al-Athar</p>
      </div>
    </>,
  ];
}

export default function ShiaTimeline() {
  return (
    <div className="px-2 py-4 md:px-10 md:py-20">
      {/* main timeline div, a 20 x 100 grid */}
      <div className="timeline">
        {caliphs()}
        {imams()}
        {years()}
        {companions()}
        {scholars()}
        {books()}
      </div>
    </div>
  );
}
