import contextlib
import netifaces as ni

interfaces = ni.interfaces()

for interface in interfaces:
    with contextlib.suppress(ValueError, KeyError):
        addresses = ni.ifaddresses(interface)
        ipv4_address = addresses[ni.AF_INET][0]['addr']
        if ipv4_address != '127.0.0.1':
            break
print(ipv4_address) 