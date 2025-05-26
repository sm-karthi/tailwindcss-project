module.exports = {
  content: ["./*.html", "./src/**/*.{js,ts}"],
  theme: {

    extend: {
      width: {
        '200': '1600px',
        '1000':'1000px',
        '720':'720px',
        '1030':'1030px',
        '300':'300px'
      },
      height:{
        '450':'450px'
      },
      margin: {
        '235': '235px',
      },
      colors:{
        'green':'#3ec2a6',
        'lightGreen':'#e6fcf8'
      }
    },
  },
  plugins: [],
};