import * as schedule from 'node-schedule';

const worker = {
  scheduleJob() {
    // This rule is standard cron syntax for once per minute.
    // See http://stackoverflow.com/a/5398044/1252653
    const rule = '* * * * *';

    // Kick off the job
    const job = schedule.scheduleJob(rule, function() {
      console.log('ping!');
    });
  },

  init() {
    worker.scheduleJob();
  }
};

(function() {
    worker.init();
})();
