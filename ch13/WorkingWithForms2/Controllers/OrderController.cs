using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WorkingWithForms2.Controllers
{
    public class Flowers
    {
        public int? aster { get; set; }
        public int? daffodil { get; set; }
        public int? rose { get; set; }
        public int? peony { get; set; }
        public int? primula { get; set; }
        public int? snowdrop { get; set; }
    }

    [Route("order")]
    public class OrderController : ApiController
    {
        [HttpPost]
        public void Post(Flowers flowers)
        {
            string abc = "xyz";
        }
    }
}
