import { useState } from "react";

export const useForm = (formValue) => {
  const [form, setForm] = useState(formValue);

  const onChangeValue = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setForm( formValue );
  }

  return {
    form,
    onChangeValue,
    ...form,
    onResetForm
  };
};
