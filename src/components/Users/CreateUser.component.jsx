import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  createUserStartAsync,
  fetchSingleUserStartAsync,
  updateUserStartAsync,
} from "../../redux/userList/userActions";
import {useParams } from "react-router-dom";
import Loading from "../../utils/Loading.utils";
import CancelButton from "../../utils/Cancel.utils";

export const CreateUser = (props) => {
  const { fetchUser, updateUser, createUser, userData } = props;
  const [isUpdate, setIsUpdate] = useState(false);
  const params = useParams();

  useEffect(() => {
    if (params.userId?.length) {
      fetchUser(params.userId);
      setIsUpdate(true);
    }
  }, [isUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);
    var formObj = {};
    formData.forEach((value, key) => {
      formObj[key] = value;
    });
    if (isUpdate) {
      updateUser({ [params.userId]: formObj }, params.userId);
    } else {
      createUser(formObj);
      e.target.reset();
    }
  };

  if (userData?.loading) return <Loading />;

  return (
    <div>
      <div className="flex justify-center px-6 pt-20">
        <div className="w-full xl:w-3/4 lg:w-11/12 justify-center">
          <div className="flex justify-center">
            <div className="w-full lg:w-6/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="py-2 text-3xl font-bold pt-4 text-center">
                {" "}
                {isUpdate ? "Update User" : "Create Users"}
              </h3>
              <form
                onSubmit={handleSubmit}
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
              >
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-bold text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      data-testid="first-name"
                      label="First Name"
                      required
                      name="first_name"
                      type="text"
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="first_name"
                      placeholder="First Name"
                      defaultValue={userData.users.first_name}
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      htmlFor="last_name"
                      className="block mb-2 text-sm font-bold text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="last_name"
                      required
                      name="last_name"
                      type="text"
                      placeholder="Last Name"
                      defaultValue={userData.users.last_name}
                    />
                  </div>
                </div>

                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      htmlFor="address_1"
                      className="block mb-2 text-sm font-bold text-gray-700"
                    >
                      Address 1
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                      name="address_1"
                      type="text"
                      id="address_1"
                      placeholder="Address 1"
                      defaultValue={userData.users.address_1}
                    />
                  </div>
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      htmlFor="address_2"
                      className="block mb-2 text-sm font-bold text-gray-700"
                    >
                      Address 2
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                      name="address_2"
                      type="text"
                      id="address_2"
                      placeholder="Address 2"
                      defaultValue={userData.users.address_2}
                    />
                  </div>
                </div>

                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      htmlFor="town"
                      className="block mb-2 text-sm font-bold text-gray-700"
                    >
                      Town
                    </label>
                    <input
                      required
                      name="town"
                      type="text"
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="town"
                      placeholder="Town"
                      defaultValue={userData.users.town}
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      htmlFor="region"
                      className="block mb-2 text-sm font-bold text-gray-700"
                    >
                      Region
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="region"
                      required
                      type="text"
                      name="region"
                      placeholder="Region"
                      defaultValue={userData.users.region}
                    />
                  </div>
                </div>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      htmlFor="country"
                      className="block mb-2 text-sm font-bold text-gray-700"
                    >
                      Country
                    </label>
                    <input
                      required
                      name="country"
                      type="text"
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="country"
                      placeholder="Country"
                      defaultValue={userData.users.country}
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      htmlFor="post_code"
                      className="block mb-2 text-sm font-bold text-gray-700"
                    >
                      Post Code
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="post_code"
                      type="text"
                      required
                      name="post_code"
                      placeholder="Post Code"
                      defaultValue={userData.users.post_code}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="contact_number"
                    className="block mb-2 text-sm font-bold text-gray-700"
                  >
                    Contact Number
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="contact_number"
                    required
                    name="contact_number"
                    type="number"
                    placeholder="Contact Number"
                    defaultValue={userData.users.contact_number}
                  />
                </div>

                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-black rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    {!isUpdate ? "Add" : "Update"}
                  </button>
                </div>
                <div className="mb-6 text-center">
                  <CancelButton/>
                </div>
                <hr className="mb-6 border-t" />
              </form>
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
    createUser: (user) => dispatch(createUserStartAsync(user)),
    fetchUser: (user) => dispatch(fetchSingleUserStartAsync(user)),
    updateUser: (user) => dispatch(updateUserStartAsync(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
