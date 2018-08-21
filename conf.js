exports.config = { 
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['login-spec.js', 'companyadminuser-spec.js'],
  framework: 'jasmine2' ,
     onPrepare: function() {
        var jasmineReporters = require('jasmine-reporters');
         jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true)
         );
        },
        params :{
          login :{
            email : 'systemadmin',
            password : 'abok2016'
          }
        },
      companyadmin :{
          login:{
            email : 'xass@assistansboken.se',
            password : 'abok2016'
          }
      }
};
