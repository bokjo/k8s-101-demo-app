using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace dotnetcore_k8s_demo.Controllers
{

    [Route("/v1/api/csharp/[controller]")]
    [ApiController]
    public class K8sController : ControllerBase
    {
        string Hostname = Dns.GetHostName();
        string Ip = Dns.GetHostEntry(Dns.GetHostName()).AddressList.
            Where(ip => ip.AddressFamily == AddressFamily.InterNetwork).First().ToString(); 

         string Version = "v1";
        // GET api/values
        [HttpGet]
        public ActionResult<HostInfo> Get()
        {
            return new HostInfo(Ip, Hostname, Version);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
