import advancedFormat from 'dayjs/plugin/customParseFormat'

export default ({ app: { $dayjs } }) => {
  $dayjs.extend(advancedFormat)
}
