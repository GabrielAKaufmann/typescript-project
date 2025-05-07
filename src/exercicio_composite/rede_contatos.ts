from abc import ABC, abstractmethod

# Componente base
class Contato(ABC):
    @abstractmethod
    def exibir(self, nivel=0):
        pass

    @abstractmethod
    def buscar(self, nome):
        pass

# Folha (Pessoa)
class Pessoa(Contato):
    def __init__(self, nome):
        self.nome = nome

    def exibir(self, nivel=0):
        print("  " * nivel + f"Pessoa: {self.nome}")

    def buscar(self, nome):
        return self if self.nome == nome else None

# Composite (Grupo)
class Grupo(Contato):
    def __init__(self, nome):
        self.nome = nome
        self.membros = []

    def adicionar(self, contato):
        self.membros.append(contato)

    def exibir(self, nivel=0):
        print("  " * nivel + f"Grupo: {self.nome}")
        for membro in self.membros:
            membro.exibir(nivel + 1)

    def buscar(self, nome):
        if self.nome == nome:
            return self
        for membro in self.membros:
            resultado = membro.buscar(nome)
            if resultado:
                return resultado
        return None
