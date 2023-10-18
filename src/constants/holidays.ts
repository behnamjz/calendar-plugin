const holidays = [
  {
    'day': 1, 'title': 'عید نوروز', 'holiday': true
  },
  {
    'day': 2, 'title': 'عید نوروز', 'holiday': true
  },
  {
    'day': 3, 'title': 'عید نوروز', 'holiday': true
  },
  {
    'day': 4, 'title': 'عید نوروز', 'holiday': true
  },
  {
    'day': 12, 'title': 'روز جمهوری اسلامی', 'holiday': true
  },
  {
    'day': 13, 'title': 'روز طبیعت', 'holiday': true
  },
  {
    'day': 76, 'title': 'رحلت امام خمینی', 'holiday': true
  },
  {
    'day': 77, 'title': 'قیام خونین ۱۵ خرداد', 'holiday': true
  },
  {
    'day': 100, 'title': 'شهادت دکتر بهشتی', 'holiday': false
  },
  {
    'day': 132, 'title': 'روز مبارزه با تروریسم', 'holiday': false
  },
  {
    'day': 135, 'title': 'روز صنعت چاپ', 'holiday': false
  },
  {
    'day': 276, 'title': 'شب یلدا', 'holiday': false
  },
  {
    'day': 328, 'title': 'پیروزی انقلاب اسلامی', 'holiday': true
  },
  {
    'day': 365, 'title': 'روز ملی شدن صنعت نفت', 'holiday': true
  },
  {
    'fday': '07/01', 'title': 'ولادت امام محمد باقر علیه السلام', 'holiday': false, isLunar: true
  },
  {
    'fday': '07/03', 'title': 'شهادت امام علی النقی الهادی علیه السلام', 'holiday': false, isLunar: true
  },
  {
    'fday': '07/10', 'title': 'ولادت امام محمد تقی علیه السلام', 'holiday': false, isLunar: true
  },
  {
    'fday': '07/13', 'title': 'ولادت امام علی علیه السلام و روز پدر', 'holiday': true, isLunar: true
  },
  {
    'fday': '07/15', 'title': 'وفات حضرت زینب سلام الله علیها', 'holiday': false, isLunar: true
  },
  {
    'fday': '07/25', 'title': 'شهادت امام موسی کاظم علیه السلام', 'holiday': false, isLunar: true
  },
  {
    'fday': '07/27', 'title': 'مبعث رسول اکرم', 'holiday': true, isLunar: true
  },
  {
    'fday': '08/03', 'title': 'ولادت سالار شهیدان، امام حسین علیه السلام', 'holiday': false, isLunar: true
  },
  {
    'fday': '08/04', 'title': 'ولادت ابوالفضل العباس علیه السلام', 'holiday': false, isLunar: true
  },
  {
    'fday': '08/05', 'title': 'ولادت امام زین العابدین علیه السلام', 'holiday': false, isLunar: true
  },
  {
    'fday': '08/11', 'title': 'ولادت علی اکبر علیه السلام و روز جوان', 'holiday': false, isLunar: true
  },
  {
    'fday': '08/15', 'title': 'ولادت حضرت قائم عجل الله تعالی فرجه و جشن نیمه شعبان', 'holiday': false, isLunar: true
  },
  {
    'fday': '09/15', 'title': 'ولادت امام حسن مجتبی علیه السلام', 'holiday': false, isLunar: true
  },
  {
    'fday': '09/18', 'title': 'شب قدر', 'holiday': false, isLunar: true
  },
  {
    'fday': '09/19', 'title': 'ضربت خوردن حضرت علی علیه السلام', 'holiday': false, isLunar: true
  },
  {
    'fday': '09/21', 'title': 'شهادت حضرت علی علیه السلام', 'holiday': true, isLunar: true
  },
  {
    'fday': '09/22', 'title': 'شب قدر', 'holiday': true, isLunar: true
  },
  {
    'fday': '10/02', 'title': 'عید سعید فطر', 'holiday': true, isLunar: true
  }, //bugs
  {
    'fday': '10/03', 'title': 'تعطیل به مناسبت عید سعید فطر', 'holiday': true, isLunar: true
  }, //bugs
  {
    'fday': '10/26', 'title': 'شهادت امام جعفر صادق علیه السلام', 'holiday': true, isLunar: true
  }, //bugs
  {
    'fday': '11/02', 'title': 'ولادت حضرت معصومه سلام الله علیها و روز دختران', 'holiday': false, isLunar: true
  }, //bugs
  {
    'fday': '11/12', 'title': 'ولادت امام رضا علیه السلام', 'holiday': false, isLunar: true
  }, //bugs
  {
    'fday': '11/30', 'title': 'شهادت امام محمد تقی علیه السلام', 'holiday': false, isLunar: true
  }, //bugs
  {
    'fday': '12/07', 'title': 'شهادت امام محمد باقرعلیه السلام', 'holiday': false, isLunar: true
  },
  {
    'fday': '12/09', 'title': 'روز عرفه', 'holiday': false, isLunar: true
  },
  {
    'fday': '12/10', 'title': 'عید سعید قربان', 'holiday': true, isLunar: true
  },
  {
    'fday': '12/15', 'title': 'ولادت امام علی النقی الهادی علیه السلام', 'holiday': false, isLunar: true
  },
  {
    'fday': '12/18', 'title': 'عید سعید غدیر خم', 'holiday': true, isLunar: true
  },
  {
    'fday': '12/20', 'title': 'ولادت امام موسی کاظم علیه السلام', 'holiday': false, isLunar: true
  },
  {
    'fday': '12/20', 'title': 'ولادت امام موسی کاظم علیه السلام', 'holiday': false, isLunar: true
  },
  {
    'fday': '01/10', 'title': 'تاسوعای حسینی', 'holiday': true, isLunar: true
  },
  {
    'fday': '01/11', 'title': 'عاشورای حسینی', 'holiday': true, isLunar: true
  }, //bugs
  {
    'fday': '01/13', 'title': 'شهادت امام زین العابدین علیه السلام', 'holiday': false, isLunar: true
  },
  {
    'fday': '01/14', 'title': 'شهادت امام زین العابدین علیه السلام', 'holiday': false, isLunar: true
  },
  {
    'fday': '02/20', 'title': 'اربعین حسینی', 'holiday': true, isLunar: true
  },
  {
    'fday': '02/28', 'title': 'رحلت رسول اکرم؛شهادت امام حسن مجتبی علیه السلام', 'holiday': true, isLunar: true
  },
  {
    'fday': '02/28', 'title': 'رحلت رسول اکرم؛شهادت امام حسن مجتبی علیه السلام', 'holiday': false, isLunar: true
  },
  {
    'fday': '02/30', 'title': 'شهادت امام رضا علیه السلام', 'holiday': true, isLunar: true
  },
  {
    'fday': '03/01', 'title': 'هجرت پیامبر اکرم از مکه به مدینه', 'holiday': false, isLunar: true
  },
  {
    'fday': '03/09', 'title': 'شهادت امام حسن عسکری علیه السلام', 'holiday': true, isLunar: true
  }, //bugs
  {
    'fday': '03/13', 'title': 'میلاد رسول اکرم به روایت اهل سنت', 'holiday': false, isLunar: true
  }, //bugs
  {
    'fday': '03/18', 'title': 'میلاد رسول اکرم و امام جعفر صادق علیه السلام', 'holiday': true, isLunar: true
  }, //bugs
  {
    'fday': '04/11', 'title': 'وفات حضرت معصومه سلام الله علیها', 'holiday': false, isLunar: true
  }, //bugs
  {
    'fday': '05/06', 'title': 'ولادت حضرت زینب سلام الله علیها و روز پرستار و بهورز', 'holiday': false, isLunar: true
  }, //bugs
  {
    'fday': '06/04', 'title': 'شهادت حضرت فاطمه زهرا سلام الله علیها', 'holiday': true, isLunar: true
  }, //bugs
  {
    'fday': '06/21', 'title': 'ولادت حضرت فاطمه زهرا سلام الله علیها و روز زن', 'holiday': false, isLunar: true
  }, //bugs
  {
    'fday': '06/30', 'title': 'ولادت امام محمد باقر علیه السلام', 'holiday': false, isLunar: true
  },
  {
    'day': 1, 'title': 'جشن نوروز', 'holiday': false
  },
  {
    'day': 6, 'title': 'روز امید / روز شادباش‌نویسی', 'holiday': false
  },
  {
    'day': 10, 'title': 'جشن آبان‌گاه', 'holiday': false
  },
  {
    'day': 13, 'title': 'جشن سیزده‌به‌در', 'holiday': false
  },
  {
    'day': 17, 'title': 'سروش روز، جشن سروش‌گان', 'holiday': false
  },
  {
    'day': 19, 'title': 'فروردین روز، جشن فروردین‌گان', 'holiday': false
  },
  // ordibehesht // +31
  {
    'day': 33, 'title': 'جشن گیاه‌آوری', 'holiday': false
  },
  {
    'day': 34, 'title': 'اردیبهشت روز، جشن اردیبهشت‌گان', 'holiday': false
  },
  {
    'day': 41, 'title': 'جشن چهلم نوروز', 'holiday': false
  },
  {
    'day': 46, 'title': 'گاهنبار میدیوزَرِم، جشن میانه بهار، جشن بهاربد / روز پیام‌آوری زرتشت', 'holiday': false
  },
  // khordad // +62
  {
    'day': 63, 'title': 'ارغاسوان، جشن گرما', 'holiday': false
  },
  {
    'day': 68, 'title': 'خرداد روز، جشن خردادگان', 'holiday': false
  },
  // tir // +93
  {
    'day': 94, 'title': 'جشن آب‌پاشونک، جشن آغاز تابستان / سال نو در گاهشماری گاهنباری', 'holiday': false
  },
  {
    'day': 99, 'title': 'جشن نیلوفر', 'holiday': false
  },
  {
    'day': 106, 'title': 'تیرروز، جشن تیرگان', 'holiday': false
  },
  {
    'day': 108, 'title': 'جشن خام‌خواری', 'holiday': false
  },
  // mordad // +124
  {
    'day': 131, 'title': 'مردادروز، جشن مردادگان', 'holiday': false
  },
  {
    'day': 134, 'title': 'جشن چهلم تابستان', 'holiday': false
  },
  {
    'day': 139, 'title': 'گاهنبار میدیوشِم، جشن میانه تابستان', 'holiday': false
  },
  {
    'day': 142, 'title': 'جشن مَی‌خواره', 'holiday': false
  },
  // shahrivar // +155
  {
    'day': 156, 'title': 'فغدیه، جشن خنکی هوا', 'holiday': false
  },
  {
    'day': 158, 'title': 'جشن کشمین', 'holiday': false
  },
  {
    'day': 159, 'title': 'شهریورروز، جشن شهریورگان / زادروز داراب (کوروش) / عروج مانی', 'holiday': false
  },
  {
    'day': 163, 'title': 'خزان جشن', 'holiday': false
  },
  {
    'day': 170, 'title': 'بازار جشن', 'holiday': false
  },
  {
    'day': 186, 'title': 'گاهنبار پَتیَه‌شَهیم، جشن پایان تابستان', 'holiday': false
  },
  // mehr // +186
  {
    'day': 187, 'title': 'جشن میتراکانا / سال نو هخامنشی', 'holiday': false
  },
  {
    'day': 195, 'title': 'آیین قالیشویان اردهال، بازماندی از تیرگان', 'holiday': false
  },
  {
    'day': 199, 'title': 'تیرروز، جشن تیرروزی', 'holiday': false
  },
  {
    'day': 202, 'title': 'مهرروز، جشن مهرگان', 'holiday': false
  },
  {
    'day': 207, 'title': 'رام روز، جشن رام روزی / جشن پیروزی کاوه و فریدون', 'holiday': false
  },
  // aban // +216
  {
    'day': 226, 'title': 'آبان روز، جشن آبان‌گان', 'holiday': false
  },
  {
    'day': 231, 'title': 'گاهنبار اَیاثرَم، جشن میانه پاییز', 'holiday': false
  },
  // azar // +246
  {
    'day': 247, 'title': 'آذر جشن', 'holiday': false
  },
  {
    'day': 255, 'title': 'آذر روز، جشن آذرگان', 'holiday': false
  },
  {
    'day': 276, 'title': 'جشن شب یلدا (چله) / گاهنبار میدیارِم، جشن میانه سال گاهنباری و پایان پاییز', 'holiday': false
  },
  // dey // +276
  {
    'day': 277, 'title': 'روز میلاد خورشید، جشن خرم روز / نخستین جشن دی‌گان', 'holiday': false
  },
  {
    'day': 281, 'title': 'بازار جشن', 'holiday': false
  },
  {
    'day': 284, 'title': 'دی به آذر روز، دومین جشن دی‌گان', 'holiday': false
  },
  {
    'day': 290, 'title': 'سیر روز، جشن گیاه‌خواری', 'holiday': false
  },
  {
    'day': 291, 'title': 'جشن پیکرتراشی / دی به مهر روز، سومین جشن دی‌گان', 'holiday': false
  },
  {
    'day': 292, 'title': 'جشن درامزینان، جشن درفش‌ها', 'holiday': false
  },
  {
    'day': 299, 'title': 'دی به دین روز، چهارمین جشن دی‌گان', 'holiday': false
  },
  // bahman // +306
  {
    'day': 307, 'title': 'زادروز فردوسی', 'holiday': false
  },
  {
    'day': 308, 'title': 'بهمن روز، جشن بهمن‌گان', 'holiday': false
  },
  {
    'day': 310, 'title': 'شهریور روز، آغاز پادشاهی داراب (کوروش)', 'holiday': false
  },
  {
    'day': 311, 'title': 'جشن نوسَره', 'holiday': false
  },
  {
    'day': 316, 'title': 'آبان روز، جشن سَدَه، آتش افروزی بر بام‌ها / نمایش بازی همگانی', 'holiday': false
  },
  {
    'day': 321, 'title': 'جشن میانه زمستان', 'holiday': false
  },
  {
    'day': 328, 'title': 'بادروز، جشن بادروزی', 'holiday': false
  },
  // esfand // +336
  {
    'day': 337, 'title': 'جشن اسفندی / جشن آبسالان، بهار جشن / نمایش بازی همگانی', 'holiday': false
  },
  {
    'day': 341, 'title': 'اسفند روز، جشن اسفندگان، گرامی‌داشت زمین و بانوان / جشن برزگران', 'holiday': false
  },
  {
    'day': 346, 'title': 'جشن وخشنکام', 'holiday': false
  },
  {
    'day': 355, 'title': 'جشن نوروز رودها', 'holiday': false
  },
  {
    'day': 356, 'title': 'جشن گلدان', 'holiday': false
  },
  {
    'day': 361, 'title': 'پایان سرایش شاهنامه فردوسی', 'holiday': false
  },
  {
    'day': 362, 'title': 'فروردگان', 'holiday': false
  },
  {
    'day': 365, 'title': 'گاهنبار هَمَسپَتمَدَم، جشن پایان زمستان / زادروز زرتشت / جشن اوشیدر (نجات بخش ایرانی) در دریاچه هامون و کوه خواجه / آتش افروزی بر بام‌ها در استقبال از نوروز', 'holiday': false
  },
];

export default holidays;
