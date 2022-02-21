import React, { useEffect } from "react";
import { Link} from "react-router-dom";
import { connect } from "react-redux";
import {
  deleteUserStartAsync,
  fetchUsersStartAsync,
} from "../../redux/userList/userActions";
import Loading from "../../utils/Loading.utils";
import AddUser from "../../utils/AddUser.utils";

export const LandingPage = (props) => {
  const { fetchUser, deleteUser, userData } = props;
  useEffect(() => {
    fetchUser();
  }, []);

  const deleteUserHandler = (e) => {
    e.preventDefault();
    const userId = e.target.dataset.id;
    deleteUser(userId);
  };

  if (userData?.loading) return <Loading />;

  return (
    <div>
      <div className="flex justify-between items-center px-6 pt-20">
        <div>
          <h2 className=" py-2 text-3xl font-bold">Users List</h2>
        </div>
        <div>
          <div>
           <AddUser/>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <div>
              {" "}
              <table className="w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr className="text-base">
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">First Name</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Last Name</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Address 1</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Address 2</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Town</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Region</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Country</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Post Code</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        Contact Number
                      </div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Action</div>
                    </th>
                  </tr>
                </thead>
                {userData?.users &&
                  Object.entries(userData?.users).map((userItem) => (
                    <tbody
                      key={userItem[1]}
                      className="text-sm divide-y divide-gray-100"
                    >
                      <tr className="text-sm font-bold text-gray-700">
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{`${userItem[1].first_name}`}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{`${userItem[1].last_name}`}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{`${userItem[1].address_1}`}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{`${userItem[1].address_2}`}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{`${userItem[1].town}`}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{`${userItem[1].region}`}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{`${userItem[1].country}`}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{`${userItem[1].post_code}`}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{`${userItem[1].contact_number}`}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex gap-2 text-center">
                            <div>
                              <Link to={"/edit-user/" + userItem[0]}>
                                <div className="w-full inline-flex items-center text-blue-500 hover:text-blue-700 underline font-semibold capitalize">
                                  Edit User
                                </div>
                              </Link>
                            </div>
                            <div>
                              <div
                                data-id={userItem[0]}
                                onClick={deleteUserHandler}
                                className="w-full inline-flex cursor-pointer items-center text-red-500 hover:text-red-700 underline font-semibold capitalize"
                              >
                                Delete User
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUsersStartAsync()),
    deleteUser: (user) => dispatch(deleteUserStartAsync(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
