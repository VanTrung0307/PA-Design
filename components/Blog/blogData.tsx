import { Blog } from '@/types/blog'

const BlogData: Blog[] = [
  {
    _id: 1,
    mainImage:
      'https://sawadeesign.vn/wp-content/uploads/2023/08/365242350_827942945443722_8833144784399307812_n.jpg',
    categoryImage: [
      'https://sawadeesign.vn/wp-content/uploads/2023/08/365143511_827942528777097_8258860307663153801_n-1920x1281.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/365166567_827941448777205_7059856987902401209_n.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/365170840_827943255443691_2251563195440470796_n-1920x1281.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/365173919_827941138777236_3817397301264747355_n.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/365186818_827941258777224_2486842724094103230_n-1920x1281.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/365198136_827941508777199_7676211763067105954_n-1920x1281.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/365235521_827941642110519_2691106489755500854_n.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/365242350_827942945443722_8833144784399307812_n.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/365242922_827941845443832_2687437232366776869_n.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/365246716_827944998776850_4726738727485138044_n-1920x1281.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/365253933_827940162110667_7249659869608185313_n-1920x1281.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/365260882_827944865443530_8798668857162161613_n-1920x1281.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/365261914_827944292110254_7665826912356936319_n.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/365262446_827941822110501_8430343102053373415_n-1920x1281.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/365267448_827941315443885_9075587528195042604_n.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/365279117_827941405443876_7428401120552798507_n-1920x1281.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/365280915_827941898777160_8157368608459513289_n-1920x1281.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/365319471_827944165443600_4542795722921780051_n.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/365395435_827943005443716_6621554303606799405_n-1920x1281.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/365412531_827941662110517_5566532893191238882_n.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/365436945_827941952110488_3678945099340362569_n.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/365440834_827941925443824_5149414866956063598_n-1920x1281.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/365618889_827942102110473_7180331782225918738_n.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/365702517_827943752110308_2535389230381994144_n-1920x1281.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/365744156_827945448776805_3496524391219906122_n.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/365756462_827944342110249_4891935279390023134_n-1920x1281.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/365771081_827945115443505_4344051745536146522_n.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/365772566_827944262110257_7389660883902287100_n-1920x1281.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/366009274_827942518777098_1456127900562583124_n.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/366012693_827941722110511_8347188582249533810_n.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/366016816_827941348777215_6812624470918579081_n-1920x1281.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/366025280_827942362110447_4119077762491727017_n.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/366025857_827942872110396_6193757499243413502_n.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/366063978_827943585443658_4834619383214430560_n-1920x1281.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/366072031_827945172110166_5129752056854534304_n-1920x1281.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/366188311_827942918777058_8862900304212563903_n.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/366012661_827954448775905_858261985683759188_n-1920x1972.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/366049109_827954332109250_5325117456272426019_n-1920x1972.jpg',
      'https://sawadeesign.vn/wp-content/uploads/2023/08/366372859_827954388775911_2604140265122149420_n-1920x1972.jpg'
    ],
    title: 'THE DREAMERS',
    city: 'NHA TRANG',
    area: '200sqm',
    location: 'Thich Quang Duc St, VCN, Nha Trang, Vietnam.',
    leadArchitect: 'Doan Si Nguyen.',
    designTeam: 'Nguyen Khanh Long, Tong Thao, Nguyen Hoang Trang, Vo Hoang Vu',
    visualImages: 'Le Ha Quang Huy.',
    investor: 'The Dreamers Coffee Shop.',
    photographs: 'Hoang Le.',
  },
  {
    _id: 2,
    mainImage:
      'https://sawadeesign.vn/wp-content/uploads/2023/07/350464394_263347446252233_267630042248999183_n-1920x1283.jpg',
    title: 'HUONG NHU BOTANICA STORE',
    city: 'HO CHI MINH',
    area: '',
    location: 'Thao Dien, District 2, Vietnam.',
    leadArchitect: 'Doan Si Nguyen.',
    designTeam: 'Nguyen Khanh Long, Tong Thao',
    visualImages: '',
    investor: 'Huong Nhu Thao Moc.',
    photographs: 'Quang Tran.',
  },
  {
    _id: 3,
    mainImage:
      'https://sawadeesign.vn/wp-content/uploads/2023/07/194146335_1993501214147800_2409711839707599754_n.jpg',
    title: 'GODMOTHER BAKE AND BRUNCH',
    city: 'HO CHI MINH',
    area: '',
    location: 'Friendship Tower, Le Duan St, District 1, HCMC, Vietnam.',
    leadArchitect: 'Doan Si Nguyen.',
    designTeam: 'Vo Thanh Phat, Nguyen Gia Hung',
    visualImages: '',
    investor: '',
    photographs: 'Phu Dao',
  },
  {
    _id: 4,
    mainImage:
      'https://sawadeesign.vn/wp-content/uploads/2023/07/343604318_586533760118249_8900534535177371186_n-1-1920x1283.jpg',
    title: 'THE CUP CAFE AND COCO TEA',
    city: 'BINH DUONG',
    area: '',
    location: 'Uyen Hung, Binh Duong.',
    leadArchitect: 'Doan Si Nguyen.',
    designTeam: 'Nguyen Khanh Long, Nguyen Thien Van Trieu, Tong Thao.',
    visualImages: 'Le Ha Quang Huy.',
    investor: '18+ Co Ltd.',
    photographs: 'Quang Tran.',
  },
  {
    _id: 5,
    mainImage:
      'https://sawadeesign.vn/wp-content/uploads/2023/07/329757954_600219935453285_4828959203461358606_n.jpg',
    title: 'KATINAT TRANG QUANG KHAI',
    city: 'HO CHI MINH',
    area: '',
    location: '2 Nguyen Huu Cau ST, Tan Dinh Ward, District 1, Vietnam.',
    leadArchitect: 'Doan Si Nguyen.',
    designTeam: 'Tran Son Lam, Tong Thao, Vo Hoang Vu, Nguyen Hoang Trang.',
    visualImages: 'Le Ha Quang Huy.',
    investor: 'Katinat Saigon Kafe.',
    photographs: 'Dung Huynh.',
  },
  {
    _id: 6,
    mainImage:
      'https://sawadeesign.vn/wp-content/uploads/2023/07/1-4-1920x1200.jpg',
    title: 'KATINAT CAN THO',
    city: 'CAN THO',
    area: '',
    location: 'Can Tho, Vietnam.',
    leadArchitect: 'Doan Si Nguyen.',
    designTeam: 'Nguyen Khanh Long, Tong Thao, Nguyen Hoang Phi.',
    visualImages: 'Le Ha Quang Huy.',
    investor: 'Katinat Saigon Kafe.',
    photographs: '',
  },
  {
    _id: 7,
    mainImage:
      'https://sawadeesign.vn/wp-content/uploads/2023/07/323417273_1344659992975009_6966548763834517471_n.jpg',
    title: 'KATINAT DANG VAN BI',
    city: 'HO CHI MINH',
    area: '',
    location: '168 Dang Van Bi St, Binh Tho, Thu Duc, Vietnam.',
    leadArchitect: 'Doan Si Nguyen.',
    designTeam: 'Tran Son Lam, Nguyen Khanh Long, Tong Thao.',
    visualImages: 'Le Ha Quang Huy.',
    investor: 'Katinat Saigon Kafe.',
    photographs: 'Dung Huynh.',
  },
  {
    _id: 8,
    mainImage:
      'https://sawadeesign.vn/wp-content/uploads/2023/07/324734407_1136186190431751_3372705225422913148_n-1920x1283.jpg',
    title: 'BEMIND CHU MANH TRINH',
    city: 'HO CHI MINH',
    area: '',
    location: '46 Chu Manh Trinh, District 1, HCMC, Vietnam.',
    leadArchitect: 'Doan Si Nguyen.',
    designTeam:
      'Nguyen Khanh Long, Nguyen Thien Van Trieu, Pham Duc Hiep, Tong Thao.',
    visualImages: 'Le Ha Quang Huy.',
    investor: 'Bemind Cafe.',
    photographs: 'Quang Tran.',
  },
  {
    _id: 9,
    mainImage:
      'https://sawadeesign.vn/wp-content/uploads/2023/07/313913097_2410001372497780_7011991509566920620_n-1920x1283.jpg',
    title: 'BEMIND PASTEUR',
    city: 'HO CHI MINH',
    area: '',
    location: '230/17 Pasteur St, District 3, HCMC, Vietnam.',
    leadArchitect: 'Doan Si Nguyen.',
    designTeam:
      'Vo Thanh Phat, Tran Son Lam, Tong Thao, Nguyen Thien Van Trieu.',
    visualImages: 'Le Ha Quang Huy.',
    investor: 'Bemind Coffee.',
    photographs: 'Quang Tran.',
  },
]

export default BlogData
