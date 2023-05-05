/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Tickets } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function TicketsUpdateForm(props) {
  const {
    id: idProp,
    tickets: ticketsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    quantity: "",
    qrString: "",
    checkedIn: false,
  };
  const [quantity, setQuantity] = React.useState(initialValues.quantity);
  const [qrString, setQrString] = React.useState(initialValues.qrString);
  const [checkedIn, setCheckedIn] = React.useState(initialValues.checkedIn);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = ticketsRecord
      ? { ...initialValues, ...ticketsRecord }
      : initialValues;
    setQuantity(cleanValues.quantity);
    setQrString(cleanValues.qrString);
    setCheckedIn(cleanValues.checkedIn);
    setErrors({});
  };
  const [ticketsRecord, setTicketsRecord] = React.useState(ticketsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Tickets, idProp)
        : ticketsModelProp;
      setTicketsRecord(record);
    };
    queryData();
  }, [idProp, ticketsModelProp]);
  React.useEffect(resetStateValues, [ticketsRecord]);
  const validations = {
    quantity: [],
    qrString: [],
    checkedIn: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          quantity,
          qrString,
          checkedIn,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Tickets.copyOf(ticketsRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "TicketsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Quantity"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={quantity}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              quantity: value,
              qrString,
              checkedIn,
            };
            const result = onChange(modelFields);
            value = result?.quantity ?? value;
          }
          if (errors.quantity?.hasError) {
            runValidationTasks("quantity", value);
          }
          setQuantity(value);
        }}
        onBlur={() => runValidationTasks("quantity", quantity)}
        errorMessage={errors.quantity?.errorMessage}
        hasError={errors.quantity?.hasError}
        {...getOverrideProps(overrides, "quantity")}
      ></TextField>
      <TextField
        label="Qr string"
        isRequired={false}
        isReadOnly={false}
        value={qrString}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              quantity,
              qrString: value,
              checkedIn,
            };
            const result = onChange(modelFields);
            value = result?.qrString ?? value;
          }
          if (errors.qrString?.hasError) {
            runValidationTasks("qrString", value);
          }
          setQrString(value);
        }}
        onBlur={() => runValidationTasks("qrString", qrString)}
        errorMessage={errors.qrString?.errorMessage}
        hasError={errors.qrString?.hasError}
        {...getOverrideProps(overrides, "qrString")}
      ></TextField>
      <SwitchField
        label="Checked in"
        defaultChecked={false}
        isDisabled={false}
        isChecked={checkedIn}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              quantity,
              qrString,
              checkedIn: value,
            };
            const result = onChange(modelFields);
            value = result?.checkedIn ?? value;
          }
          if (errors.checkedIn?.hasError) {
            runValidationTasks("checkedIn", value);
          }
          setCheckedIn(value);
        }}
        onBlur={() => runValidationTasks("checkedIn", checkedIn)}
        errorMessage={errors.checkedIn?.errorMessage}
        hasError={errors.checkedIn?.hasError}
        {...getOverrideProps(overrides, "checkedIn")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || ticketsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || ticketsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
