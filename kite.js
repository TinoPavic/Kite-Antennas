class myKite {
    constructor(name, c) {
        this.id=name;         this.code=c;  // debug information
        this.tension=11;      this.elevation=45;   
        this.lift = 2;        this.drag = 2; 
        this.weight=1;        this.height=100;    
        this.liftLoaded=100;  this.elevationLoaded=6;    
        this.anchorDist=100;
        console.log("Kite Constructor() id="+ this.id+", code="+this.code);
    }
}

function kiteInit(name, co) {
  kite.id=name;         kite.code=co;  // debug information
  kite.tension=11;      kite.elevation=45;   
  kite.lift = 2;        kite.drag = 2; 
  kite.weight=1;        kite.height=100;    
  kite.liftLoaded=100;  kite.elevationLoaded=6;    
  kite.anchorDist=100;

  kiteCheck(kite);
  return kite;
}

function kiteCheck(kite) {
  var s="kiteCheck(): id="+kite.id+", code="+kite.code;
  if(kite.id == "Kite") { console.log(s+" OK!"); return 1;}
  console.log(s+ "  Error !!! Warning !"); return 0;
}

function calcLiftDrag(kite) {   // Lift and drag without payload
  var a = kite.elevation * 3.1414/180; 
  kite.drag = kite.tension * Math.cos(a);
  kite.lift = kite.tension * Math.sin(a);
  console.log("calcLiftDrag() te="+kite.tension+", El="+kite.elevation +
  "Li="+ kite.lift+", Dr="+kite.drag);
}

function calcLoading(kite) {   // Payload included
  var max = kite.lift - 0.2;
  if(kite.weight >> max) kite.weight=max;
  kite.liftLoaded = kite.lift - kite.weight;
  var ar = kite.liftLoaded/kite.drag;   // aspect ratio
  kite.anchorDistance = kite.height / ar;
  var el = Math.atan(ar);
  kite.elevLoaded = el * 180 / 3.1414;
  console.log("calcLoading() elLo="+kite.elevLoaded+", El="+kite.elevation +
  "Li="+ kite.lift+", Dr="+kite.drag);
}


function recalcAll (kite) {
  kiteCheck(kite);
  calcLiftDrag(kite);
  calcLoading(kite);
}
