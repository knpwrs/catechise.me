import { NativeSelect, Select, SelectProps } from '@mantine/core';

/**
 * Renders a NativeSelect on the server and a Select on the client
 */
export function PortableSelect({
  name,
  defaultValue,
  data,
  onChange,
}: Pick<SelectProps, 'onChange' | 'name' | 'defaultValue' | 'data'>) {
  if (typeof document === 'undefined') {
    return (
      <noscript>
        <NativeSelect
          name={name}
          defaultValue={defaultValue ?? undefined}
          data={data}
        />
      </noscript>
    );
  }

  return (
    <Select
      name={name}
      defaultValue={defaultValue}
      data={data}
      onChange={onChange}
    />
  );
}
