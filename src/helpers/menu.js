const menu = {
  data: () => ({
    dataMenu: [
      {
        name: 'Produk',
        url: '#',
        icon: 'box',
        role: ['super_admin'],
        children: [
          {
            name: 'Produk Tersedia',
            url: '/admin/produk/all',
            icon: '',
            role: ['super_admin'],
          },
          {
            name: 'Produk Kosong',
            url: '/admin/produk/empty',
            icon: '',
            role: ['super_admin'],
          },
          {
            name: 'Tambah Produk Baru',
            url: '/admin/produk/add',
            icon: '',
            role: ['super_admin'],
          },
        ],
      },
      {
        name: 'Karyawan',
        url: '#',
        icon: 'people-fill',
        role: ['super_admin'],
        children: [
          {
            name: 'All',
            url: '/admin/user/all',
            icon: '',
            role: ['super_admin'],
          },
          {
            name: 'Tambah Baru',
            url: '/admin/user/add',
            icon: '',
            role: ['super_admin'],
          },
        ],
      },
      {
        name: 'Penghasilan',
        url: '#',
        icon: 'cash-stack',
        role: ['super_admin'],
        children: [
          {
            name: 'Harian',
            url: '/admin/penghasilan/today',
            icon: '',
            role: ['super_admin'],
          },
          {
            name: 'Mingguan',
            url: '/admin/penghasilan/weekly',
            icon: '',
            role: ['super_admin'],
          },
          {
            name: 'Bulanan',
            url: '/admin/penghasilan/monthly',
            icon: '',
            role: ['super_admin'],
          },
        ],
      },
      {
        name: 'Riwayat Pesanan',
        url: '#',
        icon: 'clock',
        role: ['super_admin'],
        children: [
          {
            name: 'Harian',
            url: '/admin/riwayat/today',
            icon: '',
            role: ['super_admin'],
          },
          {
            name: 'Mingguan',
            url: '/admin/riwayat/weekly',
            icon: '',
            role: ['super_admin'],
          },
          {
            name: 'Bulanan',
            url: '/admin/riwayat/monthly',
            icon: '',
            role: ['super_admin'],
          },
        ],
      },
      {
        name: 'Setting Toko',
        url: '/admin/setting',
        icon: 'shop',
        role: ['super_admin'],
      },
    ],
  }),
}

export default menu
