export function check_data_type(data: any) {
    return Object.prototype.toString.call(data).slice(8, -1)
  }


