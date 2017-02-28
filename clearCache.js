var CFClient = require("cloudflare");
var key = require("./cloudflareKey.js");

var client = new CFClient({
    email: "sethkranzler@gmail.com",
    key: key
});

client.deleteCache("90ab534605cbadeb10f35b2327080e4d", {"purge_everything":true}).then(data => {
  if(data !== true){
    console.error("📛 cloudflare cache not cleared 📛");
  } else {
    console.log("🤓 cloudflare cache successfully cleared 🤓");
  }
});