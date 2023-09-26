class NagyKepView {
  #kep;
  constructor(kep, szuloElem) {
    //MIT és HOVA
    this.#kep = kep;
    this.szuloElem = szuloElem;
    this.#htmlOsszerak()
    this.balGomb = $(".bal")
    this.jobbGomb = $(".jobb")
    this.nagyKepHelye = $("#nagykephelye")
    this.balGomb.on("click", ()=>{
        this.#sajatEsemenykezelo("bal")
    }),
    this.jobbGomb.on("click", ()=>{
        this.#sajatEsemenykezelo("jobb")
    })
  }

  nagykepCsere(kep){
    this.nagyKepHelye.attr("src",kep)
  }


  #htmlOsszerak() {
    let txt = ``;
    txt += `
            <div class="card"><button class="bal">  <  </button>
            <div class="card-header">Főkép</div>
            <div class="card-body"> <img src="${this.#kep}" id="nagykephelye" class="img-thumbnail" alt="fdcedsf"></div>
            <div class="card-footer">Footer</div> <button class="jobb">  >  </button>
            </div>
        `;

    txt +=
    this.szuloElem.html(txt)
  }

    #sajatEsemenykezelo(esemenynev){
        console.log(esemenynev)
        const esemenyem = new CustomEvent(esemenynev)
        window.dispatchEvent(esemenyem)
    }

}

export default NagyKepView;
