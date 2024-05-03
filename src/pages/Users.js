import React from 'react'
import img from "./../components/images/hr-text.png"
import logo from "./../components/images/hr-text.png"

const Users = () => {
  return (
    <div><>
    <div className="container-fluid col-11 mx-auto">
      <div className="d-flex justify-content-between align-items-center">
        <h2>User</h2>
        <div className="serach">
          <input type="search" name="px-4" id="px-4" placeholder="search" />
          <i>icon</i>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center mx-4 my-4">
        <div className="px-4 py-2 border">
          <div className="d-flex gap-3 align-items-center">
            <h2>50000</h2>
            <div className="btn btn-sm btn-outline-info rounded-pill">
              30.8%
            </div>
          </div>
          <p>Total users</p>
        </div>
        <div className="px-4 py-2 border">
          <div className="d-flex gap-3 align-items-center">
            <h2>50000</h2>
            <div className="btn btn-sm btn-outline-info rounded-pill">
              30.8%
            </div>
          </div>
          <p>Total users</p>
        </div>
        <div className="px-4 py-2 border">
          <div className="d-flex gap-3 align-items-center">
            <h2>50000</h2>
            <div className="btn btn-sm btn-outline-info rounded-pill">
              30.8%
            </div>
          </div>
          <p>Total users</p>
        </div>
        <div className="px-4 py-2 border">
          <div className="d-flex gap-3 align-items-center">
            <h2>50000</h2>
            <div className="btn btn-sm btn-outline-info rounded-pill">
              30.8%
            </div>
          </div>
          <p>Total users</p>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center mx-4">
        <h2>User List</h2>
        <button className="btn btn-outline-danger px-4">
          view all users
        </button>
      </div>
      <div className="d-flex justify-content-between align-items-center mx-4">
        <div className="d-flex align-items-center gap-4">
          <input
            type="email"
            class="form-control"
            name=""
            id=""
            aria-describedby=""
            placeholder="abc@mail.com"
          />
          <button className="btn btn-primary">Export</button>
        </div>
        <button className="btn btn-outline-none px-4">
          Rows per page 6 <select className="border-0 ml-1"></select>
        </button>
      </div>
      <div className="row mx-3 my-2">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead class="">
              <tr>
                <th>Client</th>
                <th>Country</th>
                <th>Email</th>
                <th>Reg. Date</th>
                <th>Devivce</th>
                <th>Ip Adress</th>
                <th>Subscription</th>
                <th>Storage usage</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody class="">
              <tr>
                <td>
                  {" "}
                  <div className="d-flex justify-content-around align-items-center gap-2">
                    <img
                      src={img}
                      alt=""
                      style={{
                        height: "8vh",
                        width: "20%",
                        borderRadius: "30%",
                      }}
                    />{" "}
                    <p>Emma Store</p>
                  </div>
                </td>
                <td>
                  <div className="d-flex justify-content-around align-items-center gap-2">
                    <img
                      src={img}
                      alt=""
                      style={{
                        height: "8vh",
                        width: "20%",
                        borderRadius: "30%",
                      }}
                    />{" "}
                    <p>England</p>
                  </div>
                </td>
                <td>emailmorco12@gmail.com</td>
                <td>01-11-2022</td>
                <td>IOS</td>
                <td>192.168.1.1</td>
                <td>i i i i </td>
                <td>28.3 GB used</td>
                <td>
                  {" "}
                  <button className="btn btn-outline-danger">Disabled</button>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <div className="d-flex justify-content-around align-items-center gap-2">
                    <img
                      src={img}
                      alt=""
                      style={{
                        height: "8vh",
                        width: "20%",
                        borderRadius: "30%",
                      }}
                    />{" "}
                    <p>Emma Store</p>
                  </div>
                </td>
                <td>
                  <div className="d-flex justify-content-around align-items-center gap-2">
                    <img
                      src={img}
                      alt=""
                      style={{
                        height: "8vh",
                        width: "20%",
                        borderRadius: "30%",
                      }}
                    />{" "}
                    <p>England</p>
                  </div>
                </td>
                <td>emailmorco12@gmail.com</td>
                <td>01-11-2022</td>
                <td>IOS</td>
                <td>192.168.1.1</td>
                <td>i i i i </td>
                <td>28.3 GB used</td>
                <td>
                  {" "}
                  <button className="btn btn-outline-danger">Disabled</button>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <div className="d-flex justify-content-around align-items-center gap-2">
                    <img
                      src={img}
                      alt=""
                      style={{
                        height: "8vh",
                        width: "20%",
                        borderRadius: "30%",
                      }}
                    />{" "}
                    <p>Emma Store</p>
                  </div>
                </td>
                <td>
                  <div className="d-flex justify-content-around align-items-center gap-2">
                    <img
                      src={img}
                      alt=""
                      style={{
                        height: "8vh",
                        width: "20%",
                        borderRadius: "30%",
                      }}
                    />{" "}
                    <p>England</p>
                  </div>
                </td>
                <td>emailmorco12@gmail.com</td>
                <td>01-11-2022</td>
                <td>IOS</td>
                <td>192.168.1.1</td>
                <td>i i i i </td>
                <td>28.3 GB used</td>
                <td>
                  {" "}
                  <button className="btn btn-outline-danger">Disabled</button>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <div className="d-flex justify-content-around align-items-center gap-2">
                    <img
                      src={img}
                      alt=""
                      style={{
                        height: "8vh",
                        width: "20%",
                        borderRadius: "30%",
                      }}
                    />{" "}
                    <p>Emma Store</p>
                  </div>
                </td>
                <td>
                  <div className="d-flex justify-content-around align-items-center gap-2">
                    <img
                      src={img}
                      alt=""
                      style={{
                        height: "8vh",
                        width: "20%",
                        borderRadius: "30%",
                      }}
                    />{" "}
                    <p>England</p>
                  </div>
                </td>
                <td>emailmorco12@gmail.com</td>
                <td>01-11-2022</td>
                <td>IOS</td>
                <td>192.168.1.1</td>
                <td>i i i i </td>
                <td>28.3 GB used</td>
                <td>
                  {" "}
                  <button className="btn btn-outline-danger">Disabled</button>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <div className="d-flex justify-content-around align-items-center gap-2">
                    <img
                      src={img}
                      alt=""
                      style={{
                        height: "8vh",
                        width: "20%",
                        borderRadius: "30%",
                      }}
                    />{" "}
                    <p>Emma Store</p>
                  </div>
                </td>
                <td>
                  <div className="d-flex justify-content-around align-items-center gap-2">
                    <img
                      src={img}
                      alt=""
                      style={{
                        height: "8vh",
                        width: "20%",
                        borderRadius: "30%",
                      }}
                    />{" "}
                    <p>England</p>
                  </div>
                </td>
                <td>emailmorco12@gmail.com</td>
                <td>01-11-2022</td>
                <td>IOS</td>
                <td>192.168.1.1</td>
                <td>i i i i </td>
                <td>28.3 GB used</td>
                <td>
                  {" "}
                  <button className="btn btn-outline-danger">Disabled</button>
                </td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </div>
    </div>



    <div className="container-fluid col-11 mx-auto mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <h3>All Users</h3>
        <input
          type="search"
          name=""
          className=""
          placeholder="Search user"
          id=""
        />
      </div>
      <div className="row">
        <div className="col-4">
          <div className="card p-2">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center col-8 py-2">
                <img
                  src={logo}
                  className="rounded-circle"
                  style={{ height: "30px" }}
                  alt=""
                />
                <div>
                  <h6 className="m-0">
                    April Kapner{" "}
                    <small
                      className="badge bg-success"
                      style={{ fontSize: "10px" }}
                    >
                      Active
                    </small>
                  </h6>
                  <small style={{ fontSize: "11px" }}>HR Manager</small>
                </div>
              </div>
              <div className="btn btn-primary">Expand</div>
            </div>

            <div className="d-flex align-items-center">
              <img
                src={logo}
                className="rounded-circle"
                style={{ height: "30px" }}
                alt=""
              />
              <h6 className="m-0" style={{ fontSize: "13px" }}>
                England, United Kingdom,{" "}
              </h6>
              <p className="m-0" style={{ fontSize: "13px" }}>
                192.162.33455
              </p>
            </div>

            <div className="d-flex align-items-center py-2">
              <img
                src={logo}
                className="rounded-circle"
                style={{ height: "30px" }}
                alt=""
              />
              <p className="m-0">02/02/2021</p>
            </div>
            <p className="m-0" style={{ fontSize: "11px" }}>
              52.60 GB / 100 GB Used
            </p>
            <div className="progress" style={{ height: "5px" }}>
              <div className="progress-bar col-6 bg-info"></div>
            </div>
            <p>Total Subsriptions</p>
            <div className="d-flex justify-content-center gap-3">
              <div className="btn btn-outline-success  col-5">Active</div>
              <div className="btn btn-outline-danger col-5">Disable</div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card p-2">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center col-8 py-2">
                <img
                  src={logo}
                  className="rounded-circle"
                  style={{ height: "30px" }}
                  alt=""
                />
                <div>
                  <h6 className="m-0">
                    April Kapner{" "}
                    <small
                      className="badge bg-success"
                      style={{ fontSize: "10px" }}
                    >
                      Active
                    </small>
                  </h6>
                  <small style={{ fontSize: "11px" }}>HR Manager</small>
                </div>
              </div>
              <div className="btn btn-primary">Expand</div>
            </div>

            <div className="d-flex align-items-center">
              <img
                src={logo}
                className="rounded-circle"
                style={{ height: "30px" }}
                alt=""
              />
              <h6 className="m-0" style={{ fontSize: "13px" }}>
                England, United Kingdom,{" "}
              </h6>
              <p className="m-0" style={{ fontSize: "13px" }}>
                192.162.33455
              </p>
            </div>

            <div className="d-flex align-items-center py-2">
              <img
                src={logo}
                className="rounded-circle"
                style={{ height: "30px" }}
                alt=""
              />
              <p className="m-0">02/02/2021</p>
            </div>
            <p className="m-0" style={{ fontSize: "11px" }}>
              52.60 GB / 100 GB Used
            </p>
            <div className="progress" style={{ height: "5px" }}>
              <div className="progress-bar col-6 bg-info"></div>
            </div>
            <p>Total Subsriptions</p>
            <div className="d-flex justify-content-center gap-3">
              <div className="btn btn-outline-success  col-5">Active</div>
              <div className="btn btn-outline-danger col-5">Disable</div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card p-2">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center col-8 py-2">
                <img
                  src={logo}
                  className="rounded-circle"
                  style={{ height: "30px" }}
                  alt=""
                />
                <div>
                  <h6 className="m-0">
                    April Kapner{" "}
                    <small
                      className="badge bg-success"
                      style={{ fontSize: "10px" }}
                    >
                      Active
                    </small>
                  </h6>
                  <small style={{ fontSize: "11px" }}>HR Manager</small>
                </div>
              </div>
              <div className="btn btn-primary">Expand</div>
            </div>

            <div className="d-flex align-items-center">
              <img
                src={logo}
                className="rounded-circle"
                style={{ height: "30px" }}
                alt=""
              />
              <h6 className="m-0" style={{ fontSize: "13px" }}>
                England, United Kingdom,{" "}
              </h6>
              <p className="m-0" style={{ fontSize: "13px" }}>
                192.162.33455
              </p>
            </div>

            <div className="d-flex align-items-center py-2">
              <img
                src={logo}
                className="rounded-circle"
                style={{ height: "30px" }}
                alt=""
              />
              <p className="m-0">02/02/2021</p>
            </div>
            <p className="m-0" style={{ fontSize: "11px" }}>
              52.60 GB / 100 GB Used
            </p>
            <div className="progress" style={{ height: "5px" }}>
              <div className="progress-bar col-6 bg-info"></div>
            </div>
            <p>Total Subsriptions</p>
            <div className="d-flex justify-content-center gap-3">
              <div className="btn btn-outline-success  col-5">Active</div>
              <div className="btn btn-outline-danger col-5">Disable</div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-4">
          <div className="card p-2">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center col-8 py-2">
                <img
                  src={logo}
                  className="rounded-circle"
                  style={{ height: "30px" }}
                  alt=""
                />
                <div>
                  <h6 className="m-0">
                    April Kapner{" "}
                    <small
                      className="badge bg-success"
                      style={{ fontSize: "10px" }}
                    >
                      Active
                    </small>
                  </h6>
                  <small style={{ fontSize: "11px" }}>HR Manager</small>
                </div>
              </div>
              <div className="btn btn-primary">Expand</div>
            </div>

            <div className="d-flex align-items-center">
              <img
                src={logo}
                className="rounded-circle"
                style={{ height: "30px" }}
                alt=""
              />
              <h6 className="m-0" style={{ fontSize: "13px" }}>
                England, United Kingdom,{" "}
              </h6>
              <p className="m-0" style={{ fontSize: "13px" }}>
                192.162.33455
              </p>
            </div>

            <div className="d-flex align-items-center py-2">
              <img
                src={logo}
                className="rounded-circle"
                style={{ height: "30px" }}
                alt=""
              />
              <p className="m-0">02/02/2021</p>
            </div>
            <p className="m-0" style={{ fontSize: "11px" }}>
              52.60 GB / 100 GB Used
            </p>
            <div className="progress" style={{ height: "5px" }}>
              <div className="progress-bar col-6 bg-info"></div>
            </div>
            <p>Total Subsriptions</p>
            <div className="d-flex justify-content-center gap-3">
              <div className="btn btn-outline-success  col-5">Active</div>
              <div className="btn btn-outline-danger col-5">Disable</div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card p-2">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center col-8 py-2">
                <img
                  src={logo}
                  className="rounded-circle"
                  style={{ height: "30px" }}
                  alt=""
                />
                <div>
                  <h6 className="m-0">
                    April Kapner{" "}
                    <small
                      className="badge bg-success"
                      style={{ fontSize: "10px" }}
                    >
                      Active
                    </small>
                  </h6>
                  <small style={{ fontSize: "11px" }}>HR Manager</small>
                </div>
              </div>
              <div className="btn btn-primary">Expand</div>
            </div>

            <div className="d-flex align-items-center">
              <img
                src={logo}
                className="rounded-circle"
                style={{ height: "30px" }}
                alt=""
              />
              <h6 className="m-0" style={{ fontSize: "13px" }}>
                England, United Kingdom,{" "}
              </h6>
              <p className="m-0" style={{ fontSize: "13px" }}>
                192.162.33455
              </p>
            </div>

            <div className="d-flex align-items-center py-2">
              <img
                src={logo}
                className="rounded-circle"
                style={{ height: "30px" }}
                alt=""
              />
              <p className="m-0">02/02/2021</p>
            </div>
            <p className="m-0" style={{ fontSize: "11px" }}>
              52.60 GB / 100 GB Used
            </p>
            <div className="progress" style={{ height: "5px" }}>
              <div className="progress-bar col-6 bg-info"></div>
            </div>
            <p>Total Subsriptions</p>
            <div className="d-flex justify-content-center gap-3">
              <div className="btn btn-outline-success  col-5">Active</div>
              <div className="btn btn-outline-danger col-5">Disable</div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card p-2">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center col-8 py-2">
                <img
                  src={logo}
                  className="rounded-circle"
                  style={{ height: "30px" }}
                  alt=""
                />
                <div>
                  <h6 className="m-0">
                    April Kapner{" "}
                    <small
                      className="badge bg-success"
                      style={{ fontSize: "10px" }}
                    >
                      Active
                    </small>
                  </h6>
                  <small style={{ fontSize: "11px" }}>HR Manager</small>
                </div>
              </div>
              <div className="btn btn-primary">Expand</div>
            </div>

            <div className="d-flex align-items-center">
              <img
                src={logo}
                className="rounded-circle"
                style={{ height: "30px" }}
                alt=""
              />
              <h6 className="m-0" style={{ fontSize: "13px" }}>
                England, United Kingdom,{" "}
              </h6>
              <p className="m-0" style={{ fontSize: "13px" }}>
                192.162.33455
              </p>
            </div>

            <div className="d-flex align-items-center py-2">
              <img
                src={logo}
                className="rounded-circle"
                style={{ height: "30px" }}
                alt=""
              />
              <p className="m-0">02/02/2021</p>
            </div>
            <p className="m-0" style={{ fontSize: "11px" }}>
              52.60 GB / 100 GB Used
            </p>
            <div className="progress" style={{ height: "5px" }}>
              <div className="progress-bar col-6 bg-info"></div>
            </div>
            <p>Total Subsriptions</p>
            <div className="d-flex justify-content-center gap-3">
              <div className="btn btn-outline-success  col-5">Active</div>
              <div className="btn btn-outline-danger col-5">Disable</div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-4">
        <div className="card p-2">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center col-8 py-2">
            <img src={logo} className="rounded-circle" style={{height:'30px'}} alt="" />
            <div>
              <h6 className="m-0">April Kapner <small className="badge bg-success" style={{fontSize:'10px'}}>Active</small></h6>
              <small style={{fontSize:'11px'}}>HR Manager</small>
            </div>
          </div>
          <div className="btn btn-primary">Expand</div>
        </div>

        <div className="d-flex align-items-center">
            <img src={logo} className="rounded-circle" style={{height:'30px'}} alt="" />
              <h6 className='m-0' style={{fontSize:'13px'}}>England, United Kingdom, </h6>
              <p className="m-0" style={{fontSize:'13px'}}>192.162.33455</p>
          </div>

          <div className="d-flex align-items-center py-2">
            <img src={logo} className="rounded-circle" style={{height:'30px'}} alt="" />
              <p className='m-0'>02/02/2021</p>
          </div>
          <p className="m-0" style={{fontSize:'11px'}}>52.60 GB / 100 GB Used</p>
          <div className="progress" style={{height:'5px'}}>
            <div className="progress-bar col-6 bg-info"></div>
          </div>
          <p>Total Subsriptions</p>
          <div className="d-flex justify-content-center gap-3">
          <div className="btn btn-outline-success  col-5">Active</div>
          <div className="btn btn-outline-danger col-5">Disable</div>
          </div>

      </div>
        </div>
        <div className="col-4">
        <div className="card p-2">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center col-8 py-2">
            <img src={logo} className="rounded-circle" style={{height:'30px'}} alt="" />
            <div>
              <h6 className="m-0">April Kapner <small className="badge bg-success" style={{fontSize:'10px'}}>Active</small></h6>
              <small style={{fontSize:'11px'}}>HR Manager</small>
            </div>
          </div>
          <div className="btn btn-primary">Expand</div>
        </div>

        <div className="d-flex align-items-center">
            <img src={logo} className="rounded-circle" style={{height:'30px'}} alt="" />
              <h6 className='m-0' style={{fontSize:'13px'}}>England, United Kingdom, </h6>
              <p className="m-0" style={{fontSize:'13px'}}>192.162.33455</p>
          </div>

          <div className="d-flex align-items-center py-2">
            <img src={logo} className="rounded-circle" style={{height:'30px'}} alt="" />
              <p className='m-0'>02/02/2021</p>
          </div>
          <p className="m-0" style={{fontSize:'11px'}}>52.60 GB / 100 GB Used</p>
          <div className="progress" style={{height:'5px'}}>
            <div className="progress-bar col-6 bg-info"></div>
          </div>
          <p>Total Subsriptions</p>
          <div className="d-flex justify-content-center gap-3">
          <div className="btn btn-outline-success  col-5">Active</div>
          <div className="btn btn-outline-danger col-5">Disable</div>
          </div>

      </div>
        </div>
        <div className="col-4">
        <div className="card p-2">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center col-8 py-2">
            <img src={logo} className="rounded-circle" style={{height:'30px'}} alt="" />
            <div>
              <h6 className="m-0">April Kapner <small className="badge bg-success" style={{fontSize:'10px'}}>Active</small></h6>
              <small style={{fontSize:'11px'}}>HR Manager</small>
            </div>
          </div>
          <div className="btn btn-primary">Expand</div>
        </div>

        <div className="d-flex align-items-center">
            <img src={logo} className="rounded-circle" style={{height:'30px'}} alt="" />
              <h6 className='m-0' style={{fontSize:'13px'}}>England, United Kingdom, </h6>
              <p className="m-0" style={{fontSize:'13px'}}>192.162.33455</p>
          </div>

          <div className="d-flex align-items-center py-2">
            <img src={logo} className="rounded-circle" style={{height:'30px'}} alt="" />
              <p className='m-0'>02/02/2021</p>
          </div>
          <p className="m-0" style={{fontSize:'11px'}}>52.60 GB / 100 GB Used</p>
          <div className="progress" style={{height:'5px'}}>
            <div className="progress-bar col-6 bg-info"></div>
          </div>
          <p>Total Subsriptions</p>
          <div className="d-flex justify-content-center gap-3">
          <div className="btn btn-outline-success  col-5">Active</div>
          <div className="btn btn-outline-danger col-5">Disable</div>
          </div>

      </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-4">
        <div className="card p-2">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center col-8 py-2">
            <img src={logo} className="rounded-circle" style={{height:'30px'}} alt="" />
            <div>
              <h6 className="m-0">April Kapner <small className="badge bg-success" style={{fontSize:'10px'}}>Active</small></h6>
              <small style={{fontSize:'11px'}}>HR Manager</small>
            </div>
          </div>
          <div className="btn btn-primary">Expand</div>
        </div>

        <div className="d-flex align-items-center">
            <img src={logo} className="rounded-circle" style={{height:'30px'}} alt="" />
              <h6 className='m-0' style={{fontSize:'13px'}}>England, United Kingdom, </h6>
              <p className="m-0" style={{fontSize:'13px'}}>192.162.33455</p>
          </div>

          <div className="d-flex align-items-center py-2">
            <img src={logo} className="rounded-circle" style={{height:'30px'}} alt="" />
              <p className='m-0'>02/02/2021</p>
          </div>
          <p className="m-0" style={{fontSize:'11px'}}>52.60 GB / 100 GB Used</p>
          <div className="progress" style={{height:'5px'}}>
            <div className="progress-bar col-6 bg-info"></div>
          </div>
          <p>Total Subsriptions</p>
          <div className="d-flex justify-content-center gap-3">
          <div className="btn btn-outline-success  col-5">Active</div>
          <div className="btn btn-outline-danger col-5">Disable</div>
          </div>

      </div>
        </div>
        <div className="col-4">
        <div className="card p-2">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center col-8 py-2">
            <img src={logo} className="rounded-circle" style={{height:'30px'}} alt="" />
            <div>
              <h6 className="m-0">April Kapner <small className="badge bg-success" style={{fontSize:'10px'}}>Active</small></h6>
              <small style={{fontSize:'11px'}}>HR Manager</small>
            </div>
          </div>
          <div className="btn btn-primary">Expand</div>
        </div>

        <div className="d-flex align-items-center">
            <img src={logo} className="rounded-circle" style={{height:'30px'}} alt="" />
              <h6 className='m-0' style={{fontSize:'13px'}}>England, United Kingdom, </h6>
              <p className="m-0" style={{fontSize:'13px'}}>192.162.33455</p>
          </div>

          <div className="d-flex align-items-center py-2">
            <img src={logo} className="rounded-circle" style={{height:'30px'}} alt="" />
              <p className='m-0'>02/02/2021</p>
          </div>
          <p className="m-0" style={{fontSize:'11px'}}>52.60 GB / 100 GB Used</p>
          <div className="progress" style={{height:'5px'}}>
            <div className="progress-bar col-6 bg-info"></div>
          </div>
          <p>Total Subsriptions</p>
          <div className="d-flex justify-content-center gap-3">
          <div className="btn btn-outline-success  col-5">Active</div>
          <div className="btn btn-outline-danger col-5">Disable</div>
          </div>

      </div>
        </div>
        <div className="col-4">
        <div className="card p-2">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center col-8 py-2">
            <img src={logo} className="rounded-circle" style={{height:'30px'}} alt="" />
            <div>
              <h6 className="m-0">April Kapner <small className="badge bg-success" style={{fontSize:'10px'}}>Active</small></h6>
              <small style={{fontSize:'11px'}}>HR Manager</small>
            </div>
          </div>
          <div className="btn btn-primary">Expand</div>
        </div>

        <div className="d-flex align-items-center">
            <img src={logo} className="rounded-circle" style={{height:'30px'}} alt="" />
              <h6 className='m-0' style={{fontSize:'13px'}}>England, United Kingdom, </h6>
              <p className="m-0" style={{fontSize:'13px'}}>192.162.33455</p>
          </div>

          <div className="d-flex align-items-center py-2">
            <img src={logo} className="rounded-circle" style={{height:'30px'}} alt="" />
              <p className='m-0'>02/02/2021</p>
          </div>
          <p className="m-0" style={{fontSize:'11px'}}>52.60 GB / 100 GB Used</p>
          <div className="progress" style={{height:'5px'}}>
            <div className="progress-bar col-6 bg-info"></div>
          </div>
          <p>Total Subsriptions</p>
          <div className="d-flex justify-content-center gap-3">
          <div className="btn btn-outline-success  col-5">Active</div>
          <div className="btn btn-outline-danger col-5">Disable</div>
          </div>

      </div>
        </div>
      </div>
    </div>



    <div className="container-fluid col-11 mt-3">
      <img
        src={logo}
        alt=""
        className="mx-auto d-block rounded-circle"
        style={{ height: "80px" }}
      />
      <h4 className="text-center">
        Daniel Sillivan <span className="ps-4"><span className="badge bg-success fw-normal fs-6" style={{marginRight:'-90px'}}>Active</span></span>
      </h4>
      <p className="text-center">QA Tester</p>

      <div className="row m-0 mt-5 justify-content-center">
        <div className="col-2">
          <h5>15/02/22</h5>
          <p>Registration Date</p>
        </div>
        <div className="col-2">
          <h5>12</h5>
          <p>Subscription</p>
        </div>
        <div className="col-2">
          <h5 className="text-warning">11.25 GB / 100 GB</h5>
          <p>Storage</p>
        </div>
      </div>

      <div className="col-12 mx-auto mt-2 p-3 rounded ">
      <h4>User Details</h4>
      <div className="row">
        <div className="col-2">
          <h6 className="mt-3">Email:</h6>
          <h6 className="mt-3">Phone Number:</h6>
          <h6 className="mt-3">IP Adress:</h6>
          <h6 className="mt-3">Date of Birth:</h6>
          <h6 className="mt-3">Country:</h6>
          <h6 className="mt-3">Home Adress:</h6>

        </div>
        <div className="col-9">
          <h6 className='mt-3'>danielsillivan@clikkmail.com</h6>
          <h6 className='mt-3'>(229) 555 0109</h6>
          <h6 className='mt-3'>192.162.66455</h6>
          <h6 className='mt-3'>27/03/1990</h6>
          <h6 className='mt-3'>United States</h6>
          <h6 className='mt-3'>6201 Elgin St. Celina, Delaware, 10299</h6>

        </div>
      </div>
      </div>
    </div>





    <div className="card col-11 mx-auto p-3">
      <h4>Storage</h4>
      <p>Storage</p>
      <div className="progress" style={{ height: "7px" }}>
        <div className="progress-bar bg-info col-5"></div>
      </div>
      <p>11.25 GB Used / 100 GB</p>
      <h3>Subscriptions</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Product</th>
            <th>Storage Used</th>
            <th>Action</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Swiper</td>
            <td>1.3 GB Used</td>
            <td >
              <div className="ms-2 btn btn-outline-success">Activate</div>
              <div className="ms-2 btn btn-outline-danger">Deactivate</div>
              <div className="ms-2 btn btn-outline-warning">Overdue</div>
            </td>
            <td>
            <div className="btn btn-success">Active</div>
            </td>
          </tr>

          <tr>
            <td>Clikkle Ads</td>
            <td>0.96 GB Used</td>
            <td>
              <div className="btn ms-2 btn-outline-success">Activate</div>
              <div className="btn ms-2 btn-outline-danger">Deactivate</div>
              <div className="btn ms-2 btn-outline-warning">Overdue</div>
            </td>
            <td>
            <div className="btn btn-success">Active</div>
            </td>
          </tr>

          <tr>
            <td>Clikkle Compaigns</td>
            <td>3.33 GB Used</td>
            <td>
              <div className="btn ms-2 btn-outline-success">Activate</div>
              <div className="btn ms-2 btn-outline-danger">Deactivate</div>
              <div className="btn ms-2 btn-outline-warning">Overdue</div>
            </td>
            <td>
            <div className="btn btn-success">Active</div>
            </td>
          </tr>

          <tr>
            <td>Clikkle E-sign</td>
            <td>784 MB Used</td>
            <td>
              <div className="btn ms-2 btn-outline-success">Activate</div>
              <div className="btn ms-2 btn-outline-danger">Deactivate</div>
              <div className="btn ms-2 btn-outline-warning">Overdue</div>
            </td>
            <td>
            <div className=" btn btn-success">Active</div>
            </td>
          </tr>

          <tr>
            <td>Clikkle Files</td>
            <td>2.40 MB Used</td>
            <td>
              <div className="btn ms-2 btn-outline-success">Activate</div>
              <div className="btn ms-2 btn-outline-danger">Deactivate</div>
              <div className="btn ms-2 btn-outline-warning">Overdue</div>
            </td>
            <td>
            <div className="btn btn-success">Active</div>
            </td>
          </tr>

          <tr>
            <td>Clikkle Files</td>
            <td>2.40 MB Used</td>
            <td>
              <div className="btn ms-2 btn-outline-success">Activate</div>
              <div className="btn ms-2 btn-outline-danger">Deactivate</div>
              <div className="btn ms-2 btn-outline-warning">Overdue</div>
            </td>
            <td>
            <div className="btn btn-success">Active</div>
            </td>
          </tr>

          <tr>
            <td>Clikkle Files</td>
            <td>2.40 MB Used</td>
            <td>
              <div className="btn ms-2 btn-outline-success">Activate</div>
              <div className="btn ms-2 btn-outline-danger">Deactivate</div>
              <div className="btn ms-2 btn-outline-warning">Overdue</div>
            </td>
            <td>
            <div className="btn btn-success">Active</div>
            </td>
          </tr>

          <tr>
            <td>Clikkle Files</td>
            <td>2.40 MB Used</td>
            <td>
              <div className="btn ms-2 btn-outline-success">Activate</div>
              <div className="btn ms-2 btn-outline-danger">Deactivate</div>
              <div className="btn ms-2 btn-outline-warning">Overdue</div>
            </td>
            <td>
            <div className="btn btn-success">Active</div>
            </td>
          </tr>

          <tr>
            <td>Clikkle Files</td>
            <td>2.40 MB Used</td>
            <td>
              <div className="btn ms-2 btn-outline-success">Activate</div>
              <div className="btn ms-2 btn-outline-danger">Deactivate</div>
              <div className="btn ms-2 btn-outline-warning">Overdue</div>
            </td>
            <td>
            <div className="btn btn-success">Active</div>
            </td>
          </tr>

          <tr>
            <td>Clikkle Files</td>
            <td>2.40 MB Used</td>
            <td>
              <div className="btn ms-2 btn-outline-success">Activate</div>
              <div className="btn ms-2 btn-outline-danger">Deactivate</div>
              <div className="btn ms-2 btn-outline-warning">Overdue</div>
            </td>
            <td>
            <div className="btn btn-success">Active</div>
            </td>
          </tr>

          <tr>
            <td>Clikkle Files</td>
            <td>2.40 MB Used</td>
            <td>
              <div className="btn ms-2 btn-outline-success">Activate</div>
              <div className="btn ms-2 btn-outline-danger">Deactivate</div>
              <div className="btn ms-2 btn-outline-warning">Overdue</div>
            </td>
            <td>
            <div className="btn btn-success">Active</div>
            </td>
          </tr>

          <tr>
            <td>Clikkle Files</td>
            <td>2.40 MB Used</td>
            <td>
              <div className="btn ms-2 btn-outline-success">Activate</div>
              <div className="btn ms-2 btn-outline-danger">Deactivate</div>
              <div className="btn ms-2 btn-outline-warning">Overdue</div>
            </td>
            <td>
            <div className="btn btn-success">Active</div>
            </td>
          </tr>

          <tr>
            <td>Clikkle Files</td>
            <td>2.40 MB Used</td>
            <td>
              <div className="btn ms-2 btn-outline-success">Activate</div>
              <div className="btn ms-2 btn-outline-danger">Deactivate</div>
              <div className="btn ms-2 btn-outline-warning">Overdue</div>
            </td>
            <td>
            <div className="btn btn-success">Active</div>
            </td>
          </tr>
        </tbody>
      </table>

      <h4 className="mt-4">Storage Upgrade</h4>
      <div className="my-4">
        <div className="btn ms-4 px-4 btn-dark">100 GB</div>
        <div className="btn ms-4 px-4 btn-dark">200 GB</div>
        <div className="btn ms-4 px-4 btn-dark">500 GB</div>
        <div className="btn ms-4 px-4 btn-dark">1000 GB</div>
        <div className="btn ms-4 px-4 btn-dark">Unlimited</div>
      </div>

      <h4>Account Action </h4>
      <div className="my-4">
        <div className="btn ms-4 px-4 btn-outline-dark">100 GB</div>
        <div className="btn ms-4 px-4 btn-outline-warning">200 GB</div>
        <div className="btn ms-4 px-4 btn-outline-danger">500 GB</div>
        <div className="btn ms-4 px-4 btn-outline-success">1000 GB</div>
        <div className="btn ms-4 px-4 btn-outline-info">Unlimited</div>
      </div>
    </div>


  </></div>
  )
}

export default Users