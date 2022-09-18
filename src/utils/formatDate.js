export const formatDate = (number) => {
    return new Intl.DateTimeFormat(['ban', 'id']).format(number).split('/').join('.')
  }

export const formatTime=(number)=>{
    return new Intl.DateTimeFormat('en-US',{
      timeZone:'Asia/Baku',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'
    }).format(number);
  }