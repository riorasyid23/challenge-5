const Input = () =>{
    return(
        <div>
            <div className= "container container-input bg-white shadow-lg" style={{marginTop: "100px"}}>
                <h4 className="mb-3">Pencarianmu</h4>
                    <div className="row">
                        <div className="input-type mb-3">
                            <p className="mb-1">Tipe Driver</p>
                            <select className="form-select rounded-1 border-dark" id="inputGroupSelect02" style={{fontSize: "0.75rem", height: "36px"}}>
                            <option value="1">Dengan Sopir</option>
                            <option value="2">Tanpa Sopir</option>
                            </select>
                        </div>

                        <div className="input-type mb-3">
                            <p className="mb-1">Tanggal</p>
                            <input className="dated rounded-1 border-dark" id="inputGroupSelect02" type="date" />
                        </div>

                        <div className="input-type mb-3">
                            <p className="mb-1">Waktu Jemput/Ambil</p>
                            <input className="timed rounded-1 border-dark" id="inputGroupSelect02" type="time" />
                        </div>

                        <div className="input-type mb-3">
                            <p className="mb-1">Jumlah Penumpang(Optional)</p>
                            <input style={{fontSize: "0.75rem", height: "38px"}} className="jml rounded-1 border-dark" id="inputGroupSelect02" type="text" placeholder="Jumlah Penumpang" />
                        </div>
                        
                        <div className="butt-wrapper">
                            <button style={{marginTop: "2.7rem"}} class="search-edit"><a style={{textDecoration: "none", color: "black"}} href="pencarian.html">Edit</a></button> 
                        </div>
                        
                    </div>

            </div>
            
        </div>
    );
};
export default Input;