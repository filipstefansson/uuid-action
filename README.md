# UUID GitHub Action

GitHub Action to create generate [UUIDs](https://en.wikipedia.org/wiki/Universally_unique_identifier).

Use the `name` argument to be able to generate the same UUID over and over using the same input. If you don't pass `name`, a random UUID will be returned.

## Inputs

### `name`

(optional) Use this to be able to generate a UUID based on input.

### `namespace`

(optional) Set the UUID namespace.

## Outputs

### `uuid`

The generated UUID.

## Example usage

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    name: Test UUID action
    steps:
      - name: Set UUID
        id: generate-uuid
        uses: filipstefansson/uuid-action@v1
        with:
          name: ${{ github.sha }}
      # use the output from the `generate-uuid` step
      - name: Get the UUID
        run: echo "UUID is ${{ steps.generate-uuid.outputs.uuid }}"
```
