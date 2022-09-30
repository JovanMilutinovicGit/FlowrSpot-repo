/* eslint-disable react/prop-types */
import React from "react";
import "../../styles/InputSearch.css";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { fetchSearchFlowers } from "../../actions/Index.js";

const InputSearch = ({ fetchSearchFlowers, set }) => {
  const { register, handleSubmit, getValues } = useForm();

  const val = getValues();

  const onSubmit = (data, e) => {
    e.preventDefault();
    fetchSearchFlowers(data);
    set(val);
  };

  return (
    <form className="form-input" onChange={handleSubmit(onSubmit)}>
      <span className="icon">
        <i className="fa fa-search"></i>
      </span>
      <input
        placeholder="Looking for something specific?"
        type="text"
        {...register("query")}
      />
    </form>
  );
};
export default connect(null, { fetchSearchFlowers })(InputSearch);
