export type Blog = {
  id: number;
  title: string;
  content: string;
};

export const blogs: Blog[] = [
  {
    id: 1,
    title: "ເລີ່ມຕົ້ນກັບ Next.js",
    content:
      "Next.js ແມ່ນ React Framework ທີ່ຊ່ວຍໃຫ້ເຮົາສ້າງເວັບໄຊໄດ້ໄວ ພ້ອມລະບົບ Routing ແບບ File-based.",
  },
  {
    id: 2,
    title: "ຮູ້ຈັກກັບ App Router",
    content:
      "App Router ໃຊ້ໂຟນເດີ app/ ໃນການກຳນົດເສັ້ນທາງ ແລະ ຮອງຮັບ Server Components ເປັນຄ່າເລີ່ມຕົ້ນ.",
  },
  {
    id: 3,
    title: "Dynamic Routes ດ້ວຍ [id]",
    content:
      "ການຕັ້ງຊື່ໂຟນເດີແບບ [id] ຊ່ວຍໃຫ້ເຮົາຮັບຄ່າຈາກ URL ຜ່ານ params ແລ້ວນຳໄປສະແດງຂໍ້ມູນທີ່ກົງກັນໄດ້.",
  },
];
