/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TicketsCreateFormInputValues = {
    capacity?: number;
    qrString?: string;
    checkedIn?: boolean;
};
export declare type TicketsCreateFormValidationValues = {
    capacity?: ValidationFunction<number>;
    qrString?: ValidationFunction<string>;
    checkedIn?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TicketsCreateFormOverridesProps = {
    TicketsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    capacity?: PrimitiveOverrideProps<TextFieldProps>;
    qrString?: PrimitiveOverrideProps<TextFieldProps>;
    checkedIn?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type TicketsCreateFormProps = React.PropsWithChildren<{
    overrides?: TicketsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TicketsCreateFormInputValues) => TicketsCreateFormInputValues;
    onSuccess?: (fields: TicketsCreateFormInputValues) => void;
    onError?: (fields: TicketsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TicketsCreateFormInputValues) => TicketsCreateFormInputValues;
    onValidate?: TicketsCreateFormValidationValues;
} & React.CSSProperties>;
export default function TicketsCreateForm(props: TicketsCreateFormProps): React.ReactElement;
