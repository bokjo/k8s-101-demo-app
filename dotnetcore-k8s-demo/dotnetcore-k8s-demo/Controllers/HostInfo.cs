namespace dotnetcore_k8s_demo.Controllers
{
    public class HostInfo
    {
        public string Ip { get; set; }
        public string Hostname { get; set; }

        public HostInfo(string Ip, string Hostname) {
            this.Ip = Ip;
            this.Hostname = Hostname;
        }
    }
}
