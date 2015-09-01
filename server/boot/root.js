module.exports = function(server) {
  // Install a `/` route that returns server status
 server.get("/",function(req,res){
 	res.render("index",{});
 });
};
