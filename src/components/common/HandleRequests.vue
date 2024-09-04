<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold text-gray-800 mb-6">Solicitudes Pendientes</h2>

    <div class="overflow-x-auto">
      <table class="min-w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <thead class="bg-gray-200 text-gray-600 text-sm uppercase font-semibold">
          <tr>
            <th class="py-3 px-4 md:px-6 text-left">Cliente</th>
            <th class="py-3 px-4 md:px-6 text-left">Cédula</th>
            <th class="py-3 px-4 md:px-6 text-left">Dirección</th>
            <th class="py-3 px-4 md:px-6 text-left">Tipo de Contrato</th>
            <th class="py-3 px-4 md:px-6 text-left">Solicitud</th>
            <th class="py-3 px-4 md:px-6 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody class="text-gray-700">
          <tr v-for="request in requests" :key="request.id" class="border-b">
            <td class="py-4 px-4 md:px-6">{{ request.client }}</td>
            <td class="py-4 px-4 md:px-6">{{ request.cedula }}</td>
            <td class="py-4 px-4 md:px-6">{{ request.address }}</td>
            <td class="py-4 px-4 md:px-6">{{ request.contractType }}</td>
            <td class="py-4 px-4 md:px-6">{{ request.description }}</td>
            <td class="py-4 px-4 md:px-6">
              <!-- Mostrar ícono dependiendo del estado de la solicitud -->
              <svg v-if="!request.completed" @click="openModal(request)" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
              </svg>

              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h3 class="text-xl font-bold mb-4">Modificar Solicitud</h3>
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="contractId" class="block font-semibold text-gray-700">ID del Contrato:</label>
            <input v-model="selectedRequest.contractId" id="contractId" type="text" class="border border-gray-300 rounded-lg w-full p-2 mt-1" disabled>
          </div>

          <div class="mb-4">
            <label for="contractType" class="block font-semibold text-gray-700">Tipo de Contrato:</label>
            <input v-model="selectedRequest.contractType" id="contractType" type="text" class="border border-gray-300 rounded-lg w-full p-2 mt-1">
          </div>

          <div class="mb-4">
            <label for="cedula" class="block font-semibold text-gray-700">Cédula:</label>
            <input v-model="selectedRequest.cedula" id="cedula" type="text" class="border border-gray-300 rounded-lg w-full p-2 mt-1">
          </div>

          <div class="mb-4">
            <label for="address" class="block font-semibold text-gray-700">Dirección:</label>
            <input v-model="selectedRequest.address" id="address" type="text" class="border border-gray-300 rounded-lg w-full p-2 mt-1">
          </div>

          <div class="mb-4">
            <label for="newTerms" class="block font-semibold text-gray-700">Nuevos Términos:</label>
            <textarea v-model="selectedRequest.newTerms" id="newTerms" class="border border-gray-300 rounded-lg w-full p-2 mt-1"></textarea>
          </div>

          <div class="flex justify-end">
            <button type="button" @click="closeModal" class="mr-4 px-4 py-2 bg-gray-500 text-white rounded-lg">Cancelar</button>
            <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-lg">Guardar</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Notificación de solicitud completada -->
    <div v-if="notificationVisible" class="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
      Solicitud completada con éxito.
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Request {
  id: number;
  client: string;
  cedula: string;
  address: string;
  contractType: string;
  description: string;
  contractId?: number;
  newTerms?: string;
  completed: boolean;
}

const requests = ref<Request[]>([
  {
    id: 1,
    client: 'Juan Pérez',
    cedula: '0123456789',
    address: 'Calle Falsa 123',
    contractType: 'Básico',
    description: 'Solicitud de cambio de dirección.',
    contractId: 12345,
    newTerms: '',
    completed: false
  },
  {
    id: 2,
    client: 'María Gómez',
    cedula: '9876543210',
    address: 'Avenida Siempre Viva 742',
    contractType: 'Premium',
    description: 'Revisión de términos de contrato.',
    contractId: 67890,
    newTerms: '',
    completed: false
  },
]);

const isModalOpen = ref(false);
const selectedRequest = ref<Request | null>(null);
const notificationVisible = ref(false);

const openModal = (request: Request) => {
  selectedRequest.value = { ...request }; // Copiamos los datos para editar
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedRequest.value = null;
};

const submitForm = () => {
  if (selectedRequest.value) {
    const index = requests.value.findIndex(r => r.id === selectedRequest.value?.id);
    if (index !== -1) {
      // Actualizar la solicitud y marcarla como completada
      requests.value[index] = { ...selectedRequest.value, completed: true };
    }

    // Mostrar notificación de éxito
    notificationVisible.value = true;
    setTimeout(() => {
      notificationVisible.value = false;
    }, 3000); // La notificación desaparece después de 3 segundos

    closeModal();
  }
};
</script>

<style scoped>
/* Estilos opcionales para el modal y la notificación */
</style>
